import React from 'react';
import ReactDOM from 'react-dom';

const rootElem = document.querySelector('.root');

const containerStyle = {
  fontFamily: 'Tahoma',
  backgroundColor: '#c2fff5',
  textAlign: 'center',
  borderRadius: '20px',
  padding: '80px 0'
};

const inputStyle = {
  width: '180px',
  height: '50px',
  margin: '30px 10px',
  padding: '0 10px',
  display: 'inline-block',
  outline: '0',
  border: '0',
  borderRadius: '5px',
  backgroundColor: '#fff'
};

const buttonStyle = {
  width: '260px',
  height: '50px',
  outline: '0',
  border: '0',
  borderRadius: '5px',
  backgroundColor: '#f08686',
  color: '#fff'
};

const app = (
  <div style={containerStyle}>
    <h1>SUBSCRIBE</h1>
    <p>Sign up with your email address to receive news and updates.</p>
    <form action='server.asp' method='get'>
      <input style={inputStyle} type='text' placeholder='First name'></input>
      <input style={inputStyle} type='text' placeholder='Last name'></input>
      <input style={inputStyle} type='text' placeholder='Email'></input><br></br>
      <input style={buttonStyle} type='submit' value='Subscribe'></input>
    </form>
  </div>
);

ReactDOM.render(app, rootElem);