import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ExperienceList from './ExperienceList';
import SkillList from './SkillList';
// import App from './App.react';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ExperienceList />, document.getElementById('experience-list'));
ReactDOM.render(<SkillList />, document.getElementById('skill-list'));
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
