import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Container from '../components/Container';
import Button from '../components/button';
import Navigation from '../components/Navigation';
import axios from 'axios';
import styled from 'styled-components';

const Question = () => {
  let { id } = useParams();

  const [question, setQuestion] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3001/QUESTION_DATA/${id}`).then(res => setQuestion(res.data));
  });

  return (
    <Container>
      <Navigation />
      <QuestionDiv>
        {question && (
          <>
            <PageTitle>
              <div>
                <span>{question.title}</span>
                <Response>
                  <p>0 votes</p>
                  <p>0 answer</p>
                  <p>0 views</p>
                </Response>
              </div>
              <Link to="/questions/ask">
                <Button background="#4393f7" color="#ffffff">
                  Ask Question
                </Button>
              </Link>
            </PageTitle>
            <ContentContainer>
              <div>{question.content}</div>
              <BtnContainer>
                <Button background="none" border="#ffffff" color="#888888">
                  수정
                </Button>
                <Button background="none" border="#ffffff" color="#888888">
                  삭제
                </Button>
              </BtnContainer>
            </ContentContainer>
          </>
        )}
        <AnswerContainer>
          <span>답변</span>
        </AnswerContainer>
      </QuestionDiv>
    </Container>
  );
};

const PageTitle = styled.div`
  width: 100%;
  border-bottom: 2px solid #d9d9d9;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  span {
    font-size: 2rem;
  }
  p {
    margin-top: 17px;
    font-size: 1.5rem;
  }
`;
const QuestionDiv = styled.div`
  width: 100%;
`;
const ContentContainer = styled.div`
  width: 100%;
  padding: 3rem;
`;
const BtnContainer = styled.div`
  margin-top: 5rem;
  text-align: right;
`;

const AnswerContainer = styled.div`
  padding 2rem; span {
    font-size: 1.6rem;
  }
`;

const Response = styled.div`
  display: flex;
`;
export default Question;
