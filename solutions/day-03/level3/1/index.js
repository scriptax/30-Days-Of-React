import React from 'react';
import { createRoot } from 'react-dom/client';
import userImg from './user.jpg';

const rootElem = document.querySelector('.root');

const skills = ['HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux', 'Node', 'MongoDB', 
  'Python', 'Flask', 'Django', 'NumPy', 'Pandas', 'Data Analysis', 'MYSQL', 'D3.js',
  'Gatsby', 'Docker', 'Heroku', 'Git'];
const skillElems = skills.map(skill => <span className='skill-cards' key={skill}>{skill}</span>);

const app = (
  <div>
    <img className='user-img' alt='user, scriptax' src={userImg}></img><br></br>
    <p><strong>Scriptax</strong></p>
    <p>Junior Developer, Earth</p>
    <p><strong>SKILLS</strong></p>
    <div className='skillset'>
      {skillElems}
    </div>
    <p>Joined on Aug 20, 2020</p>
  </div>
);
const root = createRoot(rootElem);
root.render(app);