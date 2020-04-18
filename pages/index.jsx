import React from 'react'
import DigitalClock from "../src/DigitalClock";

class IndexPage extends React.Component {
  static async getInitialProps () {
    return ({
      time: new Date().toISOString()
    })
  }

  state = {
    time: this.props.time
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
