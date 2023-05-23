import './App.css';
import Home from './components/Home'
import Sobre from './components/Sobre'
import Organizadores from './components/Organizadores'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Sobre" element={<Sobre />} />
        <Route exact path="/Organizadores" element={<Organizadores />} />
      </Routes>
    </div>
  );
}

export default App;
