import PropTypes from "prop-types";
import { Component } from "react";

class ClickMe extends Component {
  // state, setState는 부모(component)에 의해 정의되어 있음
  state = { count: 0 };

  constructor(props) {
    console.log("1 - 1 constructor 호출됨");
    super(props);
    this.state = { count: props.level || 1 };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("1 - 2 / 2 - 1 getDerivedStateFromProps 호출됨");

    if (state.count > props.level * 5) {
      return { count: 0 };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("2 - 2 shouldComponentUpdate 호출됨");

    return true;
  }

  handleClick = () => {
    console.log(this);
    this.setState({ count: this.state.count + (this.props.level || 1) });
  };
  render() {
    console.log("1 -3 / 2 - 3 render 호출됨");
    return (
      <div>
        클릭 횟수 x {this.props.level || 1}: {this.state.count}
        <button onClick={this.handleClick}>클릭</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("1 - 4 componentDidMount 호출됨");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("2 - 4 getSnapshotBeforeUpdate 호출됨");

    return "hello";
  }

  componentDidUpdate() {
    console.log("2 - 5 componentDidUpdate 호출됨");
  }

  componentWillUnmount() {
    console.log("3 - 1 componentWillUnmount 호출됨");
  }
}

ClickMe.propTypes = {
  level: PropTypes.number,
};

class Parent extends Component {
  render() {
    return (
      <div>
        <h1>01 클래스 컴포넌드</h1>
        <ClickMe level={2} />
      </div>
    );
  }
}

export default Parent;
