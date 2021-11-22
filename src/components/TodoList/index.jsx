import React from 'react';
// import Timer from '../Timer';
import Timer from '../TimerFunction';
import TodoListItem from '../TodoListItem';
import FormAddTask from '../FormAddTask';

/*
* class based component
*/
class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  //render method
  render() {
    const { list, filterApplied, toggleTimer, toggleListItem, performAddTask } = this.props;
    return (
      <>
        {/* <div>
          <span>
            <input type="checkbox" id="hideTimer" onChange={this.toggleTimer} defaultChecked={hideTimer}/>
            <label htmlFor="hideTimer">Hide Timer</label>
          </span>
          { !hideTimer && <Timer /> }

        </div> */}
        <FormAddTask onSubmitCallback={performAddTask}/>

        <span>
          <input type="checkbox" id="showPending" onChange={toggleListItem} defaultChecked={filterApplied}/>
          <label htmlFor="showPending">Hide Completed</label>
        </span>
        <ul>
          {list.filter(item => (!filterApplied ? true : !item.completed)).map(item => {
            return (
              <TodoListItem key={item.id} completed={item.completed} name={item.name} />
            )
          })}
        </ul>
      </>
    );
  }

}

export default TodoList;
