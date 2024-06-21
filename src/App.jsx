import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PipBoy from './assets/pip-boy_overlay.png';
import Header from './header/Header';

import Exp from './content/exp/Exp';
import Data from './content/data/Data';
import Map from './content/map/Map';
import Footer from './footer/Footer';

//STAT
import Stat from './content/stat/Stat';
import StatStatus from './content/stat/StatStatus';
import StatSpecial from './content/stat/StatSpecial';
import StatPerks from './content/stat/StatPerks';

function App() {
  return (
  <div className='container'>
    <div className='overlay-container'>
      <img id="overlay" src={PipBoy} alt="Pip-Boy" />
    </div>
    <div className='screen'>
      <Router>
        <Header />
        <main>
          <Routes>
            {/* Redirection from root to /stat/status */}
            <Route path="/" element={<Navigate to="/stat/status" replace />} />
            <Route path="/stat" element={<Navigate to="/stat/status" replace />} />
            <Route path="/stat/*" element={<Stat />}>
              <Route path="status" element={<StatStatus />} />
              <Route path="special" element={<StatSpecial />} />
              <Route path="perks" element={<StatPerks />} />
            </Route>
            <Route path="/exp" element={<Exp />} />
            <Route path="/data" element={<Data />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </main>
        <Footer />
      </Router>
      <div className='scan'></div>
      <div className='screen-reflexion'></div>
      <div className='line'></div>
    </div>
  </div>
  );
}

export default App;
