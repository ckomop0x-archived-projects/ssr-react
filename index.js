const rootElement = document.querySelector('#app');

const myReactElement = React.createElement('h1', {
    style: {
      color: 'orange'
    }
  },
  'Hello from Netherlands and React')

ReactDOM.render(myReactElement, rootElement)
