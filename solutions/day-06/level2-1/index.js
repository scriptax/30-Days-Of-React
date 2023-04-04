import React from 'react';
import { createRoot } from 'react-dom/client';

const containerStyle = {
  width: '100%',
  textAlign: 'center',
  fontFamily: 'calibri',
  fontSize: '18px'
};

const cardSetStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  width: '70%',
  margin: '0 auto 0'
};

function checkNum(n) {
  let isPrime = true;

  if(n === 0) return 'even';
  if(n === 1) return 'odd';

  for(let i = 2; i <= Math.sqrt(n); i++) {
    if(n % i === 0) {
      isPrime = false
    }
  }

  if(isPrime) {
    return 'prime'
  } else if(n % 2 === 0) {
    return 'even'
  } else {
    return 'odd';
  }
}

const ColorCard = ({num, color}) => {
  return <span style={{
    width: '100px',
    height: '100px',
    color: '#fff',
    lineHeight: '100px',
    fontSize: '26px',
    margin: '1px',
    backgroundColor: color
  }}>{num}</span>;
};

const CardSet = ({ cardCount }) => {
  const colors = {prime: 'red', even: 'green', odd: 'yellow'};
  const cards = [];
  for(let n = 0; n < cardCount; n++) {
    let color = colors[checkNum(n)];
    cards.push(<ColorCard key={n} num={n} color={color} />);
  }
  return (
    <div style={cardSetStyle}>
      {cards}
    </div>
  );
};

const App = () => {
  return (
  <div style={containerStyle}>
    <h1>30 Days Of React</h1>
    <h2>Number Generator</h2>
    <CardSet cardCount={32} />
  </div>
  );
};

const rootElem = document.querySelector('.root');
const root = createRoot(rootElem);
root.render(<App />);