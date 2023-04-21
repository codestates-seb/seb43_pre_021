import { useSelector } from 'react-redux';
import styled from 'styled-components';

const QuestionItem = () => {
  const questions = useSelector(state => state.question.questions);

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
              <h3>{question.title}</h3>
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
