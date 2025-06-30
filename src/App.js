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
          {/* contact us changing */}
          {/* hero section animation changing */}
          {/* font size changing and colors */}
          {/* navbar changing */}
          {/*the space between slider and about and hero changing */}
      <LandingPage handler={setActiveSectionHandler} activeSection={activeSection}/>
    </div>
  );
}

export default App;
