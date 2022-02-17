import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home/Home';
import AboutMe from './screens/AboutMe/AboutMe';
import './App.css';

function App() {



  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
