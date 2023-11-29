import './App.css';
import Navigation from './components/Navigation';
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {

  return (
    <>
     <Navigation />
     <Outlet />
    </>
  );
};

export default App;
