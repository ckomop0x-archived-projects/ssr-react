const rootElement = document.querySelector('#app');
const myElement = document.createElement('h1');

myElement.classList.add('orange');
myElement.innerText = 'Hello from Netherlands'

rootElement.appendChild(myElement);
