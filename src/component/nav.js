// import React, { useState } from 'react';



// function Nav(props){
    
//     const style={color:"red"};

//     //............state..............
  

//     // Define a state variable using useState
//   const [name, setName] = useState('I am nav state');

//     return(

       
//         <>
//         <h1 style={style}>this is nav </h1>

//         <h1>{ props.title}</h1>
//         <p>{name}</p>
//         </>

//     );
// }

// export default Nav;




//.......................class...................

// import React, { Component } from 'react';

// class Nav extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'I am nav state'
//     };
//   }

//   render() {
//     const style = { color: 'red' };

//     return (
//       <>
//         <h1 style={style}>this is nav</h1>
//         <h1>{this.props.title}</h1>
//         <p>{this.state.name}</p>
//       </>
//     );
//   }
// }

// export default Nav;


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
