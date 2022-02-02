import './App.css';
import Navbar from './Components/Nav/Navigation'
import Project from './Components/Projects/Project';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <Project/>
    </div>
  );
}

export default App;
