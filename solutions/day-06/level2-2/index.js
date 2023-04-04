import React from 'react';
import { createRoot } from 'react-dom/client';

const containerStyle = {
  width: '100%',
  fontFamily: 'Arial',
  fontSize: '18px',
  textAlign: 'center'
};

const colorSetStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  width: '70%',
  margin: '0 auto 0'
};

function colorGenerator () {
  const letters = '0123456789abcdef';
  let color = '';
  for(let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * 15);
    color += letters[index];
  }
  return '#' + color;
}

const ColorCard = ({ color }) => (
  <span style={{
    width: '12.2%',
    height: '100px',
    color: '#fff',
    fontFamily: 'courier',
    lineHeight: '100px',
    backgroundColor: color,
    borderRadius: '3px',
    margin: '1px'
    /*flexBasis: '12%' can also give 8 item per row*/
  }}>{color}</span>
); 

const CardSet = ({ cardCount }) => {
  const cardElems = [];
  for(let n = 0; n < cardCount; n++) {
    let color = colorGenerator();
    cardElems.push(<ColorCard color={color} key={`card${n}`} />);
  }
  return (
    <div style={colorSetStyle}>
      {cardElems}
    </div>
  );
};

const App = () => {
  return (
    <div style={containerStyle}>
      <h1>30 Days Of React</h1>
      <h2>Hexadecimal Colors</h2>
      <CardSet cardCount={32} />
    </div>
  );
};

const rootElem = document.querySelector('.root');
const root = createRoot(rootElem);
root.render(<App />);