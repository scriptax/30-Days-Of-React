import React from "react";
import { createRoot } from 'react-dom/client';

const wrapperStyle = {
  width: '95%',
  margin: '0 auto 0'
};

function colorGenerator() {
  const letters = '0123456789abcdef';
  let color = '';
  for(let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * 15);
    color += letters[index];
  }
  return '#' + color;
}

const ColorBar = ({color}) => {
  return(
    <div style={{
      width: '100%',
      height: '70px',
      borderRadius: '5px',
      fontFamily: 'arial',
      fontWeight: 'bold',
      textAlign: 'center',
      margin: '2px 0',
      lineHeight: '35px',
      color: '#fff',
      backgroundColor: color
    }}>
    {color}</div>
  )
};

const ColorSet = ({colorCount}) => {
  const colorBars = [];
  for(let i = 0; i < colorCount; i++) {
    let color = colorGenerator();
    colorBars.push(<ColorBar color={color} key={color}/>);
  }
  return colorBars;
}

const App = () => (
  <div style={wrapperStyle}>
    <ColorSet colorCount={5} />
  </div>
);

const rootElement = document.querySelector('.root');
const root = createRoot(rootElement);
root.render(<App />);