import React from 'react';
import { createRoot } from 'react-dom/client';
import htmlLogo from './images/html_logo.png';
import cssLogo from './images/css_logo.png';
import jsLogo from './images/js_logo.png';
import reactLogo from './images/react_logo.png';

const TechLogo = ({ logoSrc }) => {
  return <img className='techLogoStyle' src={logoSrc} alt={logoSrc}></img>
}
const App = () => {
  return (
    <div className='appWrapper'>
      <p><strong>Front end Technologies</strong></p>
      <TechLogo logoSrc={htmlLogo} />
      <TechLogo logoSrc={cssLogo} />
      <TechLogo logoSrc={jsLogo} />
      <TechLogo logoSrc={reactLogo} />
    </div>
  );
}

const rootElem = document.querySelector('.root');
const root = createRoot(rootElem);
root.render(<App />);