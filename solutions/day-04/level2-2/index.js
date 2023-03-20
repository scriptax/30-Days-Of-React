import React from 'react';
import { createRoot } from 'react-dom/client';

const containerStyle = {
  fontFamily: 'arial',
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

const FormButtons = () => {
  const fields = ['First name', 'Last name', 'Email'];
  return fields.map(field => <input style={inputStyle} type='text' placeholder={field}></input>);
};

const App = () => (
  <div style={containerStyle}>
    <h1>SUBSCRIBE</h1>
    <p>Sign up with your email address to receive news and updates.</p>
    <form action='server.asp' method='get'>
      <FormButtons /><br></br>
      <input style={buttonStyle} type='submit' value='Subscribe'></input>
    </form>
  </div>
);

const rootElem = document.querySelector('.root');
const root = createRoot(rootElem);
root.render(<App />);