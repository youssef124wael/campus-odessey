import './index.css'
import LandingPage from './components/LandingPage';
import {useState} from 'react';
function App() {
  const [activeSection, setActiveSection] = useState('Hero');
  function setActiveSectionHandler(section) {
    setActiveSection(section);
  }
  return (
    <div className="App">
      <LandingPage handler={setActiveSectionHandler} activeSection={activeSection}/>
    </div>
  );
}

export default App;
