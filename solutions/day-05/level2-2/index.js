import React from 'react';
import { createRoot } from 'react-dom/client';

const wrapperStyle = {
  width: '90%',
  height: '300px',
  margin: '0 auto 0',
  fontFamily: 'Arial',
  backgroundColor: 'lightblue',
  borderRadius: '20px',
  textAlign: 'center',
  padding: '50px'
};
const inputStyle = {
  width: '170px',
  height: '40px',
  borderRadius: '7px',
  outline: '0',
  border: '0',
  margin: '50px 10px',
  padding: '0 10px'
};
const buttonStyle = {
  width: '250px',
  height: '40px',
  borderRadius: '7px',
  backgroundColor: 'salmon',
  color: 'white',
  outline: '0',
  border: '0',
  padding: '0 10px'
};

const Header = () => (
  <>
    <big><b>Subscribe</b></big>
    <p>Sign up with your email address to receive news and updates</p>
  </>
);

const InputField = (prop) => {
  const fieldName = prop.fieldName;
  return <input type='text' style={inputStyle} placeholder={fieldName}></input>;
}

const Main = () => {
  return (
    <form action='action.asp'>
      <InputField fieldName='First Name'/>
      <InputField fieldName='Last Name'/>
      <InputField fieldName='Email'/><br></br>
      <input type='submit' style={buttonStyle} value='Subscribe'></input>
    </form>
  );
}

const App = () => {
  return(
    <div style={wrapperStyle}>
      <Header />
      <Main />
    </div>
  );
}

const rootElem = document.querySelector('.root');
const root = createRoot(rootElem);
root.render(<App />);