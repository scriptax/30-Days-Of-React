import React from 'react';
import { createRoot } from 'react-dom/client';
import userImg from './user.jpg';

const skillStyle = {
  display: 'inline-block',
  backgroundColor: 'cyan',
  margin: '5px 5px',
  borderRadius: '7px',
  color: '#fff',
  padding: '3px'
};

const skillContainerStyle = {
  width: '100%'
};

const imgStyle = {
  width: '200px',
  height: '200px',
  borderRadius: '100px'
};

const SkillSet = () => {
  const skills = ['HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux', 'Node', 'MongoDB', 
  'Python', 'Flask', 'Django', 'NumPy', 'Pandas', 'Data Analysis', 'MYSQL', 'D3.js',
  'Gatsby', 'Docker', 'Heroku', 'Git'];
  return skills.map(skill => <span style={skillStyle}>{skill}</span>)
};


const App = () => (
  <div style={{fontFamily: 'Arial'}}>
    <img src={userImg} alt='scriptax' style={imgStyle}></img><br></br>
    <strong>Nick Armstrong</strong>
    <p>Junior Developer</p>
    <strong>SKILLS</strong>
    <div style={skillContainerStyle}>
      <SkillSet />
    </div>
    <p>Joined on Aug 20, 2020</p>
  </div>
);

const rootElem = document.querySelector('.root');
const root = createRoot(rootElem);
root.render(<App />);