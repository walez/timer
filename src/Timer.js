import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    //intialize state of Component
    this.state = {
        count:props.start,
        shouldRun: props.shouldRun
    }

  }

  componentDidMount(){

        // componentDidMount is called by react when the component
        // has been rendered on the page. We can set the interval here:

        this.timer = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount(){

      // This method is called immediately before the component is removed
      // from the page and destroyed. We can clear the interval here:

      clearInterval(this.timer);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.shouldRun != this.props.shouldRun){
      if(!nextProps.shouldRun)
        this.pause()
      else
        this.start()
    }
  }

  pause() {
    clearInterval(this.timer);
  }

  start() {
    this.timer = setInterval(this.tick.bind(this), 1000);
  }


  tick(){

        // This function is called every 50 ms. It updates the
        // elapsed counter. Calling setState causes the component to be re-rendered
        let count = --this.state.count;
        if(count < 0)
          clearInterval(this.timer);
        else {
          this.setState({count: count});
        }

  }

  render() {
    // Although we return an entire <p> element, react will smartly update
    // only the changed parts, which contain the seconds variable.
    let displayMins = Math.floor(this.state.count / 60);
    let displaySecs = Math.floor(this.state.count % 60);
    return <span>{displayMins} Minutes, {displaySecs} Seconds</span>;
  }
}

export default App;
