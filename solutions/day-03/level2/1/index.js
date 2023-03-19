import React from 'react';
import ReactDom from 'react-dom';
import frontendTechs from './frontend_technologies.png';

const image = <img src={frontendTechs} alt="Frontend Techs"></img>;
const rootElem =  document.querySelector('.root');

ReactDom.render(image, rootElem);
