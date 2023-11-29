import React, { useEffect, useState } from 'react';

interface Question {
  question: string;
  difficulty: string;
}

const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [token, setToken] = useState('');
  const tokenUrl = 'https://opentdb.com/api_token.php?command=request';
  const apiUrl = `https://opentdb.com/api.php?amount=10&category=15&type=multiple&token=${token}`;

  useEffect(() => {
    fetch(tokenUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.response_code === 0) {
          setToken(data.token);
        }
      })
      .catch((error) => console.error('Error fetching token: ', error));
  }, [tokenUrl]);

  useEffect(() => {
    if (token) {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setQuestions(data.results);
        })
        .catch((error) => console.error('Error fetching data: ', error));
    }
  }, [apiUrl, token]);

  return (
    <>
      <h1>Quiz Page</h1>
      {questions.length > 0 &&
        questions.map((question, index) => (
          <div className='m-5' key={index}>
            <h4 className='mb-5'>{question.question}</h4>
            <h6 className='capitalize'>Difficulty: {question.difficulty}</h6>
          </div>
        ))}
    </>
  );
};

export default Quiz;
