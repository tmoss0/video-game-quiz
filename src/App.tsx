import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {
  const [score, setScore] = useState(0);

  return (
    <>
     <Navigation />
     <Outlet />
    </>
  );
};

export default App;
