import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  border-bottom: 1px solid rgb(214, 217, 219);
  padding: 10px;
  margin: 10px;

  > div {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  > p {
    line-height: 1.5rem;
  }
`;

const UserImg = styled.img`
  width: 23px;
  height: 22px;
  margin-right: 10px;
  border-radius: 5px;
`;

const AnswerList = () => {
  const answers = useSelector(state => state.answer.answers);
  const userinfo = useSelector(state => state.userinfo.user);
  console.log('answerList', answers);
  return (
    <>
      {answers.map((el, idx) => (
        <div key={idx}>
          <Container>
            <div>
              <UserImg src={userinfo.img} alt="userimg" />
              <p>{userinfo.displayName}</p>
            </div>
            <p>{el}</p>
          </Container>
        </div>
      ))}
    </>
  );
};

export default AnswerList;
