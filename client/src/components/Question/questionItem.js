import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const QuestionItem = () => {
  const [questions, setQuestions] = useState([]);

  const questionData = 'http://localhost:3001/QUESTION_DATA';

  // 실제 서버 연결용
  // useEffect(() => {
  //   axios
  //     .get('/question')
  //     .then(res => {
  //       setQuestions(res.data.content);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get(`${questionData}`)
      .then(res => {
        setQuestions(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {questions.map((question, index) => (
        <ItemDiv key={index}>
          <Item>
            <Response>
              <p>0 votes</p>
              <p>0 answer</p>
              <p>0 views</p>
            </Response>
            <Question>
              {/* 실제 서버 연결용 */}
              {/* <Link to={`/questions/${question.questionId}`}> */}
              <Link to={`/questions/${question.id}`}>
                <h3>{question.title}</h3>
              </Link>
              <content>{question.content}</content>
            </Question>
          </Item>
        </ItemDiv>
      ))}
    </div>
  );
};

const ItemDiv = styled.div`
  border-bottom: 2px solid #d9d9d9;
`;

const Item = styled.div`
  padding: 2rem;
  display: flex;
  font-size: 1.2rem;
`;
const Question = styled.div`
  width: 80%;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;

  h3 {
    font-size: 1.4rem;
    margin-bottom: 12px;
    color: #4393f7;
  }
  content {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
const Response = styled.div`
  width: 115px;
  p {
    margin-bottom: 12px;
    margin-right: 25px;
    text-align: right;
  }
`;

export default QuestionItem;
