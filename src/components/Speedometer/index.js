import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrementSpeed = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onDecrementSpeed = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          className="img1"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="heading2">
          Speed is <span>{speed}</span>mph
        </h1>
        <h1>Speed is 0mph</h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>

        <div>
          <button
            type="button"
            className="button1"
            onClick={this.onIncrementSpeed}
          >
            Accelerater
          </button>
          <button
            type="button"
            className="button2"
            onClick={this.onDecrementSpeed}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
