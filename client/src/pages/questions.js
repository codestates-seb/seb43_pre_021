import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import axios from 'axios';
import styled from 'styled-components';
import QuestionItem from '../components/Question/questionItem.js';
import Button from '../components/button.js';
import Container from '../components/Container.js';
import Navigation from '../components/Navigation.js';
const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);

  useEffect(() => {
    axios
      .get('http://localhost:3001/QUESTION_DATA')
      .then(res => {
        setQuestions(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Container>
      <Navigation />
      <QuestionsDiv>
        <PageTitle>
          <div>
            <span>All Questions</span>
            <p>{questions.length} questions</p>
          </div>
          {isLoggedIn ? (
            <Link to="/questions/ask">
              <Button background="#4393f7" color="#ffffff">
                Ask Question
              </Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button background="#4393f7" color="#ffffff">
                Ask Question
              </Button>
            </Link>
          )}
        </PageTitle>
        <QuestionsContainer>
          <QuestionItem questions={questions} />
        </QuestionsContainer>
      </QuestionsDiv>
    </Container>
  );
};

const QuestionsDiv = styled.div`
  width: 100%;
`;
const PageTitle = styled.div`
  width: 100%;
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
