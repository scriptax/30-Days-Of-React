import React from 'react';
import { createRoot } from 'react-dom/client';

const Header = ({color, bgColor}) => (
  <header className='header' style={{color: color, backgroundColor: bgColor}}>
    <h1>Welcome to the React tutorial</h1>
    <h2>By scriptax!</h2>
  </header>
);

const Main = ({color, bgColor}) => (
  <main className='main' style={{color: color, backgroundColor: bgColor}}>
    <h3>Course Details</h3>
    <p>In this tutorial, you will learn JSX, components, props, hooks, etc.</p>
    <p>At the end of the tutorial, you will have solid knowledge on building single page applications using React</p>
    <p>The prerequisites are:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
    <p>For more info, visit <a href='#'>this page</a></p>
  </main>
);

const Footer = ({color, bgColor}) => (
  <footer className='footer' style={{color: color, backgroundColor: bgColor}}>
    Copyright all rights reserved.
  </footer>
);

class App extends React.Component {
  state = {
    date: new Date()
  }
  render() {
    this.state.date.setHours(19);
    let hour = this.state.date.getHours();
    let header, main, footer;
    if(hour >= 5 && hour <= 11) {
      header = <Header color={'black'} bgColor={'#fff2c8'} />
      main = <Main color={'black'} bgColor={'white'} />
      footer = <Footer color={'black'} bgColor={'#fff2c8'} />
    } else if(hour > 11 && hour <= 17) {
      header = <Header color={'black'} bgColor={'#e6d18d'} />
      main = <Main color={'black'} bgColor={'white'} />
      footer = <Footer color={'black'} bgColor={'#e6d18d'} />
    } else if(hour > 17 && hour <= 23) {
      header = <Header color={'white'} bgColor={'#1a1c25'} />
      main = <Main color={'white'} bgColor={'#191c29'} />
      footer = <Footer color={'white'} bgColor={'#1a1c25'} />
    } else if(hour >= 0 && hour < 5) {
      header = <Header color={'white'} bgColor={'#0e0f13'} />
      main = <Main color={'white'} bgColor={'#0e1018'} />
      footer = <Footer color={'white'} bgColor={'#0e0f13'} />
    }
    return (
      <div className='appContainer'>
        {header}
        {main}
        {footer}
      </div>
    );
  }
};

const rootElem = document.querySelector('.root');
const root = createRoot(rootElem);
root.render(<App />);