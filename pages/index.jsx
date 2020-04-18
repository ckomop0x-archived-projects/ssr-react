import React from 'react'
import DigitalClock from "../src/DigitalClock";

class IndexPage extends React.Component {
  state = {
    time: new Date()
  }

  tick = () => {
    this.setState(() => ({time: new Date()}))
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }


  render() {
    return <DigitalClock time={this.state.time}/>
  }
}

export default IndexPage;
