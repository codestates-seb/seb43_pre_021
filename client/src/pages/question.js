import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Question = () => {
  let { id } = useParams();

  const [question, setQuestion] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3001/QUESTION_DATA/${id}`).then(res => setQuestion(res.data));
  });

  return (
    <>
      {question && (
        <>
          <div>{question.title}</div>
          <div>{question.content}</div>
        </>
      )}
    </>
  );
};
export default Question;
