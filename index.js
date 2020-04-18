const rootElement = document.querySelector('#app');

const Hello = function ({time}) {
  return React.createElement('h1', {
    style: {
      color: 'orange'
    }
  },
  'Hello from Netherlands and React \n' + time)
}

ReactDOM.render(React.createElement(Hello, {time: new Date().toLocaleDateString()}, null), rootElement)
