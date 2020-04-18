const rootElement = document.querySelector('#app');

class Hello extends React.Component {
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
    return (React.createElement('h1', {style: {color: 'orange'}}, 'Hello from Netherlands and React \n' + this.state.time))
  }
}

ReactDOM.render(React.createElement(Hello, {}, null), rootElement)
