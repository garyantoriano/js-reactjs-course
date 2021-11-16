import React from 'react';
import TodoListItem from '../TodoListItem';

/*
* class based component
*/
class TodoList extends React.Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      list: [
      {
        id: 0,
        name: "Learn ReactJs",
        completed: true
      },
      {
        id: 1,
        name: "Learn React hooks",
        completed: false
      },
      {
        id: 3,
        name: "Learn Redux",
        completed: false
      },
      {
        id: 4,
        name: "Learn testing",
        completed: false
      }
    ]};
  }

  //render method
  render() {
    return (
      <ul>
        {this.state.list.map(item => {
          return (
            <TodoListItem completed={item.completed} name={item.name} />
          )
        })}
      </ul>
    );
  }

}

export default TodoList;
