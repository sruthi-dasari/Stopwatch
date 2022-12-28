import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isTimerStarted: false,
      secondsTime: 0,
      minutesTime: 0,
    }
    console.log('Constructor called')
  }

  componentDidMount() {
    const {isTimerStarted} = this.state
    if (isTimerStarted) {
      this.timerId = setInterval(this.tick, 1000)
    }
    console.log('ComponentDidMount called')
  }

  tick = () => {
    this.setState(prevState => ({secondsTime: prevState.secondsTime + 1}))
  }

  onClickStart = () => {
    this.setState({isTimerStarted: true})
  }

  onClickStop = () => {}

  render() {
    console.log('render called')
    const {isTimerStarted} = this.state

    {
      isTimerStarted && <StartTimer />
    }

    const {secondsTime, minutesTime} = this.state

    if (secondsTime === 60) {
      this.setState(prevState => ({minutesTime: prevState.minutesTime + 1}))
    }

    return (
      <div className="app-container">
        <h1 className="main-heading">Stopwatch</h1>
        <div className="main-card">
          <div className="card-heading-container">
            <img
              className="stopwatch-icon"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <h1 className="card-heading">Timer</h1>
          </div>
          <h1 className="timer-text">
            {minutesTime}:{secondsTime}
          </h1>
          <div className="buttons-container">
            <button
              className="start-btn btn"
              type="button"
              onClick={this.onClickStart}
            >
              Start
            </button>
            <button
              className="stop-btn btn"
              type="button"
              onClick={this.onClickStop}
            >
              Stop
            </button>
            <button
              className="reset-btn btn"
              type="button"
              onClick={this.onClickReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
