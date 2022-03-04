import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home/Home';
import AboutMe from './screens/AboutMe/AboutMe';
import Projects from './screens/Projects/Projects'
import './App.css';

function App() {



  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
