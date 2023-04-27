import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import QuestionItem from '../components/Question/questionItem';
import SearchItem from '../components/Question/searchItem.js';
import Button from '../components/button.js';
import Container from '../components/Container.js';
const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  const searchTerm = useSelector(state => state.search.searchTerm);

  let [answers, setAnswers] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/question`)
      .then(res => {
        setQuestions(res.data.content);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get(`${process.env.REACT_APP_API_URL}/answer`).then(res => {
      setAnswers(res.data);
    });
  }, []);

  return (
    <Container>
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
        {searchTerm ? (
          <QuestionsContainer>
            {questions.map((question, index) => (
              <ItemDiv key={index}>
                <SearchItem question={question} />
              </ItemDiv>
            ))}
          </QuestionsContainer>
        ) : (
          <QuestionsContainer>
            {questions.map((question, index) => (
              <ItemDiv key={index}>
                <QuestionItem question={question} answers={answers} />
              </ItemDiv>
            ))}
          </QuestionsContainer>
        )}
      </QuestionsDiv>
    </Container>
  );
};
const ItemDiv = styled.div``;
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
