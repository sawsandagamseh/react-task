// import Nav from './component/nav';
// import Body from './component/body';
// import Footer from './component/footer';
// import './App.css';

// function App() {
//   return (
//     <div className="container">
//      <Nav  title='hello iam props title'/>
//      <Body  title='hello iam props title'/>
//      <Footer name='hello iam prps name'/>
//     </div>
//   );
// }
// export default App;
// 

import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  handleAddTask = () => {
    const { newTask, tasks } = this.state;
    if (newTask.trim() !== '') {
      this.setState({
        tasks: [...tasks, newTask],
        newTask: '',
      });
    }
  };

  handleRemoveTask = (index) => {
    const { tasks } = this.state;
    const updatedTasks = tasks.slice();
    updatedTasks.splice(index, 1);
    this.setState({ tasks: updatedTasks });
  };

  render() {
    const { tasks, newTask } = this.state;

    return (
      <div>
        <h2>To-Do List</h2>
        <div>
          <input
            type="text"
            placeholder="Add a new task"
            value={newTask}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleAddTask}>Add</button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => this.handleRemoveTask(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
