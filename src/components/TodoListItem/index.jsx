import React from "react";

/*
* class based component
*/
class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <input type="checkbox" checked={this.props.completed} />
        { this.props.name }
        &nbsp;
        <button>Start task</button>
      </li>
    )
  }
}

/*
* function component
*/
// const TodoListItem = ({ completed, name }) => {
//   return (
//     <li>
//       <input type="checkbox" defaultChecked={completed} />
//       { name }
//     </li>
//   )
// };

export default TodoListItem;
