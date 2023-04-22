import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Container from '../components/Container';
import Button from '../components/button';
import axios from 'axios';
import styled from 'styled-components';

const Question = () => {
  let { id } = useParams();

  const [question, setQuestion] = useState('');

  const onDelete = () => {
    const confirmDelete = window.confirm('정말로 삭제하시겠습니까?');
    if (confirmDelete) {
      axios
        .delete(`http://localhost:3001/QUESTION_DATA/${id}`)
        .then(res => {
          console.log(res.data);
        })
        .then(() => {
          document.location.href = '/questions';
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  const onUpdate = () => {
    document.location.href = `/questions/ask/${id}`;
  };

  useEffect(() => {
    axios.get(`http://localhost:3001/QUESTION_DATA/${id}`).then(res => setQuestion(res.data));
  });

  return (
    <Container>
      <QuestionDiv>
        {question && (
          <>
            <PageTitle>
              <div>
                <span>{question.title}</span>
                <Response>
                  <p> 0 votes </p>
                  <p> 0 answer </p>
                  <p> 0 views </p>
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
                <Button onClick={onUpdate} background="none" border="#ffffff" color="#888888">
                  수정
                </Button>
                <Button onClick={onDelete} background="none" border="#ffffff" color="#888888">
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
    margin: 17px 10px 0 10px;
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
