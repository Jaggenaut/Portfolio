import './App.css';
import Experience from './Components/Experience';
import Journey from './Components/Journey';
import WorkingOn from './Components/WorkingOn';
import Intro from './Components/Intro';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <div className='top'>
        <div className='IntroAndExperience'>
      <Intro/>
      <Experience/>
      </div>
      <Skills/>
      </div>
      <div className='bottom'>
      <Journey/>
      <WorkingOn/>
      </div>
    </div>
  );
}

export default App;
