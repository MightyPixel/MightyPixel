import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ExperienceList from './ExperienceList';
import SkillList from './SkillList';
import ProjectList from './ProjectList';
import CourseList from './CourseList';
import InfoList from './InfoList';
// import App from './App.react';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ExperienceList />, document.getElementById('experience-list'));
ReactDOM.render(<SkillList />, document.getElementById('skill-list'));
ReactDOM.render(<CourseList />, document.getElementById('course-list'));
ReactDOM.render(<ProjectList />, document.getElementById('project-list'));
ReactDOM.render(<InfoList sectionType="strengths"/>, document.getElementById('strength-list'));
ReactDOM.render(<InfoList sectionType="achivements"/>, document.getElementById('achivement-list'));
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
