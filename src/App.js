import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';

class App extends Component {
  constructor(props) {
    super(props);
    //intialize state of Component
    this.state = {
      tasks: [],
      desc: ""
    };

    this.addTask = this.addTask.bind(this);
    this.changeDesc = this.changeDesc.bind(this);
  }

  addTask() {
    let task = {};
    task.countDown = 120;
    task.desc = this.state.desc;
    task.shouldRun = true;
    this.state.tasks.push(task)
    this.setState({task: this.state.tasks, desc: ""});

  }

  pauseClock(index) {
    this.state.tasks[index].shouldRun = !this.state.tasks[index].shouldRun;
    this.setState({tasks: this.state.tasks})
  }

  changeDesc(event) {
    this.setState({desc: event.target.value});
  }

  render() {
    let taskList = this.state.tasks.map((task, index) => {
      return <li> {task.desc} - <Timer start={task.countDown} shouldRun={task.shouldRun}></Timer> <button onClick={this.pauseClock.bind(this, index)}>Pause/Resume</button></li>;
    })
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Timer</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>

            <input name="task" placeholder="Enter Task" onChange={this.changeDesc} />
            <button onClick={this.addTask}>Add Task</button>
        </div>
        <div>
          <ul>{taskList}</ul>
        </div>
      </div>

    );
  }
}

export default App;
