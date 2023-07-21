import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar, Bollywood, Fitness, Food, Hollywood, Technology, Home } from './pages';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Bollywood' element={<Bollywood />} />
        <Route path='/Fitness' element={<Fitness />} />
        <Route path='/Food' element={<Food />} />
        <Route path='/Hollywood' element={<Hollywood />} />
        <Route path='/Technology' element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
