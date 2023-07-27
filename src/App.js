import React from 'react'; 
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import {
  Navbar,
  Bollywood,
  Fitness,
  Food,
  Hollywood,
  Technology,
  Home,
} from './pages';
import { ProvideInfo } from './component/ContextApi';

function App() {
  return (
    <div className="App">
      <ProvideInfo>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/react-blog-app" element={<Navigate to="/home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Bollywood" element={<Bollywood />} />
          <Route path="/Fitness" element={<Fitness />} />
          <Route path="/Food" element={<Food />} />
          <Route path="/Hollywood" element={<Hollywood />} />
          <Route path="/Technology" element={<Technology />} />
        </Routes>
      </ProvideInfo>
    </div>
  );
}

export default App;
