import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AskBtn from '../components/Btn/askBtn';
const Questions = () => {
  return (
    <QuestionsDiv>
      <span>Questions</span>
      <Link to="/questions/ask">
        <AskBtn />
      </Link>
    </QuestionsDiv>
  );
};

const QuestionsDiv = styled.div``;

export default Questions;
