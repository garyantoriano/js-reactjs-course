import React from 'react';
// import Timer from '../Timer';
import Timer from '../TimerFunction';
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
      hideTimer: false
    };
    
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
    const { filterApplied, hideTimer } = this.state;
    const { list } = this.props;
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
