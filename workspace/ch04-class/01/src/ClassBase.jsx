import PropTypes from "prop-types";
import { Component } from "react";

class ClickMe extends Component {
  // state, setState는 부모(component)에 의해 정의되어 있음
  state = { count: 0 };

  constructor(props) {
    super(props);
    this.state = { count: props.level || 1 };
  }

  handleClick = () => {
    console.log(this);
    this.setState({ count: this.state.count + (this.props.level || 1) });
  };
  render() {
    return (
      <div>
        클릭 횟수 x {this.props.level || 1}: {this.state.count}
        <button onClick={this.handleClick}>클릭</button>
      </div>
    );
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
        <ClickMe level={5} />
        <ClickMe />
      </div>
    );
  }
}

export default Parent;
