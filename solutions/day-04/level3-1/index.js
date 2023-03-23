import React from 'react';
import { createRoot } from 'react-dom/client';

const hexGenerator = () => {
  const letters = '123456789abcdef';
  let color = '';
  for(let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * letters.length);
    color += letters[index];
  }
  return '#' + color;
};

const RandColor = () => {
  let color = hexGenerator();
  let style = {
    backgroundColor: color,
    height: '50px',
    width: '100%',
    borderRadius: '4px',
    fontFamily: 'Tahoma',
    textAlign: 'center',
    paddingTop: '25px'
  };
  return <div style={style}>{color}</div>;
};

const mainStyle = {
  width: '90%',
  margin: '0 auto 0',
};

const App = () => (
  <div style={mainStyle}>
    <RandColor />
    <RandColor />
    <RandColor />
    <RandColor />
    <RandColor />
  </div>
);

const rootElem = document.querySelector('.root');
const root = createRoot(rootElem);
root.render(<App />);