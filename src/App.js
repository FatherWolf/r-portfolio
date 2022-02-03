import './App.css';
import Navbar from './Components/Nav/Navigation'
import Project from './Components/Projects/Project';
import About from './Components/About/About'
import Resume from './Components/Resume/Resume'
// import Contact from ''
import { useState } from 'react';

function App() {

  const [activeTab, setActiveTab] = useState('About')

  return (
    <div className="App">
      <header>
        <Navbar changeTab={(tab) => setActiveTab(tab)} activeTab={activeTab} />
      </header>
      <div>
        {activeTab === 'Projects' ? <Project /> : null}
        {activeTab === 'About' ? <About /> : null}
        {/* {activeTab === 'Contact' ? <Contact /> : null} */}
        {activeTab === 'Resume' ? <Resume /> : null}
      </div>
    </div>
  );
}

export default App;
