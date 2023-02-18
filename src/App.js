import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Skills from './components/Skills.js';
import Projects from './components/projects';
import Contact_Form from './components/Contact_Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Contact_Form/>
    </div>
  );
}

export default App;
