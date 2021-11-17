import React from 'react';
import Timer from '../Timer';
import TodoListItem from '../TodoListItem';

/*
* class based component
*/
class TodoList extends React.Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      filterApplied: false,
      hideTimer: false,
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
    
    this.toggleTimer = this.toggleTimer.bind(this);
    this.toggleListItem = this.toggleListItem.bind(this);
  }

  toggleTimer(event) {
    this.setState({
      hideTimer: event.currentTarget.checked
    });
  }

  toggleListItem(event) {
    this.setState({
      filterApplied: event.currentTarget.checked
    });
  }

  //render method
  render() {
    const { filterApplied, hideTimer, list } = this.state;
    return (
      <>
        <div>
          <span>
            <input type="checkbox" id="hideTimer" onChange={this.toggleTimer} defaultChecked={hideTimer}/>
            <label htmlFor="hideTimer">Hide Timer</label>
          </span>
          { !hideTimer && <Timer /> }

        </div>
        <span>
          <input type="checkbox" id="showPending" onChange={this.toggleListItem} defaultChecked={filterApplied}/>
          <label htmlFor="showPending">Hide Completed</label>
        </span>
        <ul>
          {list.filter(item => (!filterApplied ? true : !item.completed)).map(item => {
            return (
              <TodoListItem completed={item.completed} name={item.name} />
            )
          })}
        </ul>
      </>
    );
  }

}

export default TodoList;
