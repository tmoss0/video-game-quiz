import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Quiz from './Quiz';
import Home from './Home';

const Navigation: React.FC = () => {
  return (
    <Router>
      <nav>
        <ul className='flex justify-start flex-row gap-2'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/quiz'>Quiz</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='quiz' element={<Quiz />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
