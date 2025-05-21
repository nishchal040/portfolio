import logo from './logo.svg';
import './App.css';
import './components/Nav.js';
import Nav from './components/Nav.js';
import Home from './components/Home.js';
import Projects from './components/Projects.js';
import About from './components/About.js';
import Contact from './components/Contact.js';


function App() {
  return (
    <div>
   <Nav/>
   <Home/>
   <Projects/>
   <About/>
   <Contact/>
   </div>
  );
}

export default App;
