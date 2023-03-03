

import './App.css';
import SideNav from './components/SideNav';
import Home from './components/Home';
import Project from './components/Project';
import About from './components/About';
import Mode from './components/Mode';
import Theme from './components/Theme';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Mode/>
      <Theme/>
     <SideNav/>
     <Home/>
     <About/>
     <Project/>
     <Contact/>
    </div>
  );
}

export default App;
