import { Link } from 'react-router-dom';
import styled from 'styled-components';
import QuestionItem from '../components/Question/questionItem.js';
import Button from '../components/button.js';
const Questions = () => {
  return (
    <QuestionsDiv>
      <PageTitle>
        <div>
          <span>All Questions</span>
          <p>total question</p>
        </div>
        <Link to="/questions/ask">
          <Button background="#4393f7" color="#ffffff">
            Ask Question
          </Button>
        </Link>
      </PageTitle>
      <QuestionsContainer>
        <QuestionItem />
      </QuestionsContainer>
    </QuestionsDiv>
  );
};

const QuestionsDiv = styled.div``;
const PageTitle = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  span {
    font-size: 2rem;
  }
  p {
    margin: 17px 0;
    font-size: 1.5rem;
  }
`;
const QuestionsContainer = styled.div``;

export default Questions;
