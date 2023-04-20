import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AskBtn from '../components/Btn/askBtn';
import QuestionItem from '../components/Question/questionItem.js';
const Questions = () => {
  return (
    <QuestionsDiv>
      <PageTitle>
        <span>All Questions</span>
        <p>total question</p>
      </PageTitle>
      <Link to="/questions/ask">
        <AskBtn />
      </Link>
      <QuestionsContainer>
        <QuestionItem />
      </QuestionsContainer>
    </QuestionsDiv>
  );
};

const QuestionsDiv = styled.div``;
const PageTitle = styled.div``;
const QuestionsContainer = styled.div``;

export default Questions;
