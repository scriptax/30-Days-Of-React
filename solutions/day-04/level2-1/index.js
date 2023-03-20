import React from 'react';
import {createRoot} from 'react-dom/client';
import frontTechs from './frontend_technologies.png';

const App = () => (
  <>
    <img src={frontTechs} alt='FrontEnd technologies'></img>
  </>
);

const rootElem = document.querySelector('.root');
const root = createRoot(rootElem);
root.render(<App />);