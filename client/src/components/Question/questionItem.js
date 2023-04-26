import { Link } from 'react-router-dom';
import styled from 'styled-components';

const QuestionItem = ({ question }) => {
  return (
    <div>
      <Item>
        <Response>
          <p>{question.vote || 0} votes</p>
          <p>{question.answer.length} answer</p>
          <p>{question.viewCount || 0} views</p>
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
    </div>
  );
};

const Item = styled.div`
  padding: 2rem;
  display: flex;
  font-size: 1.2rem;
  border-bottom: 2px solid #d9d9d9;
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
