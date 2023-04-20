import { useSelector } from 'react-redux';

const QuestionItem = () => {
  const questions = useSelector(state => state.question.questions);

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index}>
          <h3>{question.title}</h3>
          <p>{question.content}</p>
        </div>
      ))}
    </div>
  );
};
export default QuestionItem;
