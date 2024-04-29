import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import MyProjects from './components/myprojects/MyProjects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
//import './App.css'; // This is assuming you have some general styles you want to apply
const App = () => {
  return (
    <div className="App">
      <Nav />
      <Header />
      <main>
        <About />
        <MyProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
export default App;