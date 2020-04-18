import React from 'react'

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
    return <h1 style={{color: 'orange'}}>Hello from Netherlands and React {this.state.time.toString()}</h1>

  }
}

export default IndexPage;
