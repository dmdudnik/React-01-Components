import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// const elem1 = React.createElement('span', { children: 'Привет' });
// const elem2 = React.createElement('span', { children: ' мир!' });
//const element = React.createElement('div', { a: 5, b: 10, children: ['Привет мир!'] });
// const elem1 = <span>Привет</span>;
// const elem2 = <span> мир!</span>;
// const jsxEl = (
//   <div>
//     {2 +2}
//   </div>
// );
// console.log(jsxEl);
// ReactDOM.render(jsxEl, document.querySelector('#root'));

//const data = paintings[0];






ReactDOM.render(
  <React.StrictMode>
    <App />,
    </React.StrictMode>,
  document.querySelector('#root'));

// =============================
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );
