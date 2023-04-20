import { Link } from 'react-router-dom';
import styled from 'styled-components';
import QuestionItem from '../components/Question/questionItem.js';
import Button from '../components/button.js';
const Questions = () => {
  return (
    <QuestionsDiv>
      <PageTitle>
        <span>All Questions</span>
        <p>total question</p>
      </PageTitle>
      <Link to="/questions/ask">
        <Button background="#4393f7" color="#ffffff">
          Ask Question
        </Button>
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
