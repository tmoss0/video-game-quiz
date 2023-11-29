import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      <h1 className='my-10'>Hello, welcome to Video Game Trivia</h1>
      <p className='my-10'>Click the button below to start the quiz</p>
      <button><Link to='/quiz'>Start the Quiz</Link></button>
    </>
  );
}

export default Home;