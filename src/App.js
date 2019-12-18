import './App.css';
import React, { Component } from 'react'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      score: 0,
      points: 1,
      cost: 20,
      timeStart: new Date().toLocaleTimeString(),
      timeCurrent: 0,
      timeElapsed: 0,
      elapsedStart: 0
    }
  }

  componentDidMount(){
    this.currTimeInterval = setInterval(() => this.currTime(), 1000);
    this.timeElapsedCounter = setInterval(() => this.elapsedTime(), 1000)
  }

  componentWillUnmount(){
    clearInterval(this.currTimeInterval);
    clearInterval(this.timeElapsedCounter)
  }

  handleClick(){
    let points = this.state.points;
    let score = this.state.score;
    
    let newScore = score + points;
    this.setState({
      score: newScore
    })
    
  }

  powerUp(){
    let cost = this.state.cost;
    let currScore = this.state.score - cost;

    if((currScore) < 0 ){
      return alert('Not enough points')
    }

    let points = this.state.points + 1;
    let newCost = cost + 20;
    this.setState({
      points: points,
      score: currScore,
      cost: newCost
    })
  }

  currTime(){
    this.setState({
      timeCurrent: new Date().toLocaleTimeString()
    })
  }

  elapsedTime(){
    let addSecond = this.state.timeElapsed + 1;

    this.setState({
      timeElapsed: addSecond
    })

  }


  render() {
    const {score, cost, points} = this.state;
    const {timeStart, timeCurrent, timeElapsed} = this.state;

    return (
      <div className='App-header'>
        <div className='App'>
          <div>Start time: {timeStart}</div>
          <div>Current time: {timeCurrent}</div>
          <div>Time elapsed: {timeElapsed} secs</div>
        </div>
        <div className='score'>{score}</div>
          
        <div>
          <button onClick={() => this.handleClick()}>Add {points}</button>
          <button onClick={() => this.powerUp()}>Power Up ({cost})</button>
        </div>
      </div>
    )
  }
}
