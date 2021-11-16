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
        <input type="checkbox" defaultChecked={this.props.completed} />
        { this.props.name }
      </li>      
    )
  }
}

/*
* function component
*/
// const TodoListItem = (props) => {
//   return (
//     <li>
//       <input type="checkbox" defaultChecked={props.item.completed} />
//       { props.item.name }
//     </li>
//   )
// };

export default TodoListItem;
