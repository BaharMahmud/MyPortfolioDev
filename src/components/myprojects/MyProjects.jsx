import React from 'react';
import './myprojects.css';
import generatePassword from '../../assets/generatePassword.png'
import findYourDreamJob from '../../assets/findYourDreamJob.png'
import greenHouse from '../../assets/greenHouse.png'
import checktheWeather from '../../assets/checktheWeather.png'
import noteTaker from '../../assets/noteTaker.png'
import textEditor from '../../assets/textEditor.png'

// Dummy data for project details
const projects = [
  {
    id: 1,
    name: 'Generate a random Password',
    imageUrl: generatePassword, // Replace with your image path
    githubUrl: 'https://github.com/BaharMahmud/GeneratePassword',
    deployedUrl: 'hhttps://baharmahmud.github.io/GeneratePassword/',
  },
  {
    id: 2,
    name: 'GrrenHose Plant Project',
    imageUrl: greenHouse, // Replace with your image path
    githubUrl: 'https://github.com/BaharMahmud/PlantData',
    deployedUrl: 'https://plant-data-a769bbeb4892.herokuapp.com/',
  },
  {
    id: 3,
    name: 'Check Weather Before Travelling',
    imageUrl: checktheWeather, // Replace with your image path
    githubUrl: 'https://github.com/BaharMahmud/CheckTheWeather  ',
    deployedUrl: 'https://baharmahmud.github.io/CheckTheWeather/',
  },
  {
    id: 4,
    name: 'Webpage for Job Seekers',
    imageUrl: findYourDreamJob, // Replace with your image path
    githubUrl: 'https://github.com/BaharMahmud/FindYourDreamJob',
    deployedUrl: 'https://baharmahmud.github.io/FindYourDreamJob/',
  },
  {
    id: 5,
    name: 'Text Editor Project',
    imageUrl: textEditor, // Replace with your image path
    githubUrl: 'https://github.com/BaharMahmud/TectEditorPWAStyle',
    deployedUrl: 'https://texteditorpwaproject19-14daca96dc53.herokuapp.com/',
  },
  {
    id: 6,
    name: 'Note Taker Project',
    imageUrl: noteTaker, // Replace with your image path
    githubUrl: 'https://github.com/BaharMahmud/Note_Taker',
    deployedUrl: 'https://note-taker-app-project-3d19e8dde495.herokuapp.com/',
  },
];
const MyProjects = () => (
  <div className="myProjects" id="projects">
    <h2>My Projects</h2>
    <div className="projects-container">
      {projects.map(project => (
        <div key={project.id} className="project-card">
          <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">
            <img src={project.imageUrl} alt={project.name} className="project-image" />
          </a>
          <div className="project-info">
            <h3>{project.name}</h3>
            <p>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a> |
              <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default MyProjects;







