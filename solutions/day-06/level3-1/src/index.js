import React from 'react';
import { createRoot } from 'react-dom/client';
import { tenHighestPopulation } from './info.js';

const Chart = ({info:{country, population}}) => {
  const totalPop = 7693165599;
  let chartFill = `${population * 100 / totalPop}%`;
  return (
  <div className='chartWrapper'>
    <span className='countryNameStyle'>{country}</span>
    <span className='barWrapperStyle'>
      <span className='barStyle' style={{width: chartFill}}></span>
    </span>
    <span className='popCountStyle'>{population}</span>
  </div>
  );
}

const Charts = ({ info }) => {
  const chartElems = info.map(place => {
    return <Chart info={place} key={place.country} />
  });
  return chartElems;
};

const App = () => {
  return (
    <div className='wrapperStyle'>
      <h1>30 Days Of React</h1>
      <h2>World Population</h2>
      <p>Ten most populated countries</p>
      <Charts info={tenHighestPopulation}/>
    </div>
  );
};

const rootElem = document.querySelector('.root');
const root = createRoot(rootElem);
root.render(<App />);