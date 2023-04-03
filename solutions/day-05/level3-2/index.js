import React from "react";
import { createRoot } from 'react-dom/client';
import userImage from './images/user.jpg';

const wrapperStyle = {
  fontFamily: 'Arial',
  margin: '20px'
};

const userImgStyle = {
  width: '250px',
  height: '250px',
  borderRadius: '125px',
  margin: '20px 0'
};

const skillStyle = {
  padding: '5px 8px',
  margin: '5px',
  borderRadius: '8px',
  backgroundColor: 'cyan',
  color: '#fff'
};

const skillSetStyle = {
  display: 'flex',
  flexWrap: 'wrap'
};

const Header = ({
  userInfo: {image, name, role, country}
}) => {
  return (
    <header>
      <img style={userImgStyle} src={image} alt="user"></img><br></br>
      <p><strong>{name}</strong></p>
      <p>{`${role}, ${country}`}</p>
    </header>
  );
};

const Main = ({
  userInfo: {skills}
}) => {
  const skillsFormatted = skills.map(skill => {
    return <span style={skillStyle} key={skill}>{skill}</span> 
  });
  return (
    <main>
      <p><strong>SKILLS</strong></p>
      <div style={skillSetStyle}>
        {skillsFormatted}
      </div>
    </main>
  );
};

const Footer = ({
  userInfo: {joinDate}
}) => {
  return (
    <footer>
      <p>Joined on {joinDate.toDateString()}</p>
    </footer>
  );
};

const App = () => {
  const userInfo = {
    image: userImage,
    name: 'Nick Armstrong',
    role: 'Junior Developer',
    country: 'Finland',
    skills: [
      'HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux', 'Node', 'MongoDB', 
      'Python', 'Flask', 'Django', 'NumPy', 'Pandas', 'Data Analysis', 'MYSQL', 'D3.js',
      'Gatsby', 'Docker', 'Heroku', 'Git'
    ],
    joinDate: new Date("2020-08-30")
  }
  return (
    <div style={wrapperStyle}>
      <Header userInfo={userInfo} />
      <Main userInfo={userInfo} />
      <Footer userInfo={userInfo} />
    </div>
  );
};

const rootElem = document.querySelector('.root');
const root = createRoot(rootElem);
root.render(<App />);