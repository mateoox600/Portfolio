import React from 'react';
import Header from './header/Header';
import Project from './project/Project';
import './App.css';

import html from './knowledge/html.png';
import css from './knowledge/css.png';
import js from './knowledge/js.png';
import node from './knowledge/node.png';
import php from './knowledge/php.png';
import java from './knowledge/java.png';
import cpp from './knowledge/cpp.png';
import typescript from './knowledge/typescript.png';
import python from './knowledge/python.png';

import cxplorer from './projects/c-xplorer.png';
import newtab from './projects/newtab.png';

import openNew from './icons/openNew.svg';
import github from './icons/github.png';
import linkedIn from './icons/linkedIn.png';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <div className='section' id='presentation'>
          <p>
            Hi, my name is Mathys Gasnier, i love programming since i was a kid. I started with java, and i evolved to others technologies like javascript and c++. I love programming because it gives me challenge and makes me think outside the box. In my career i would like to manage teams or even projects.
          </p>
        </div>
        <div className='section' id='techno'>
          <h1 id='techno-title'>Knowledge</h1>
          <div id='technos'>
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
            <img src={typescript} alt="" />
            <img src={node} alt="" />
            <img src={php} alt="" />
            <img src={java} alt="" />
            <img src={cpp} alt="" />
            <img src={python} alt="" />
          </div>
        </div>
        <div className='section' id='projects'>
          <h1 className='projects-title'>My projects</h1>
          <div className='projects-grid'>
            <Project
              name='This portfolio'
              description='The portfolio you are currently browsing is open source ! you can see the code on my github.'
              backgroundImage={null}
              links={[
                { link: 'https://github.com/mateoox600/Portfolio', img: github }
              ]}
            />
            <Project
              name='C-Xplorer'
              description='A file explorer made with C++ and a library named raylib.'
              backgroundImage={cxplorer}
              links={[
                { link: 'https://github.com/mateoox600/c-xplorer', img: github }
              ]}
            />
            <Project
              name='LuvaGameEngine'
              description='A game engine made with java, where you code your game in lua'
              backgroundImage={null}
              links={[
                { link: 'https://github.com/mateoox600/LuvaGameEngine', img: github }
              ]}
            />
            <Project
              name='NewTab'
              description='A web page to replace the default browser new tab page. Has an animated background, a configurable search bar and a time display'
              backgroundImage={newtab}
              links={[
                { link: 'google.com', img: openNew },
                { link: 'https://github.com/mateoox600/NewTab', img: github }
              ]}
            />
          </div>
        </div>
        <div className='section' id='contact'>
          <h1 className='contact-title'>Contact Me</h1>
          <div className='contacts'>
            <a className='contact-link' href="https://github.com/mateoox600"><img src={github} alt="" /></a>
            <a className='contact-link' href="https://www.linkedin.com/in/mathys-g"><img src={linkedIn} alt="" /></a>
          </div>
        </div>
      </main>
      <footer>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </footer>
    </div>
  );
}

export default App;
