import TodoInput from "./TodoInput.jsx";
import TodoList from "./TodoList.jsx";

function Todo(props) {
  return (
    <div id="main">
      <div id="container">
        <ul>
          <li>
            <h2>쇼핑 목록</h2>
            <TodoInput addItem={props.addItem} />
            <TodoList itemList={props.itemList} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Todo;
