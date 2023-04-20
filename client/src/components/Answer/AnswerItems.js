import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';
import { useState } from 'react';
import Answer from './Answer';
import { deleteAnswer } from '../../actions';
import { Viewer } from '@toast-ui/react-editor';

const Container = styled.div`
  border-bottom: 1px solid rgb(214, 217, 219);
  padding: 10px;
  margin: 10px;

  > div {
    display: flex;
    justify-content: space-between;
  }

  > p {
    line-height: 1.5rem;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const IconContainer = styled.div`
  display: flex;
  width: 40px;
  justify-content: space-between;
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
  const [update, setUpdate] = useState(false);

  const dispatch = useDispatch();

  const handleUpdate = () => {
    setUpdate(!update);
  };

  const handleDelete = (idx, e) => {
    e.preventDefault();
    dispatch(deleteAnswer(idx));
  };
  return (
    <>
      {answers.map((el, idx) => (
        <div key={idx}>
          <Container>
            <div>
              <UserInfo>
                <UserImg src={userinfo.img} alt="userimg" />
                <p>{userinfo.displayName}</p>
              </UserInfo>

              <IconContainer>
                <BsPencilSquare onClick={handleUpdate} />
                <BsTrash onClick={e => handleDelete(idx, e)} />
              </IconContainer>
            </div>
            <Viewer key={idx} initialValue={el} />
            {update ? <Answer from={update} text={el} idx={idx} /> : null}
          </Container>
        </div>
      ))}
    </>
  );
};

export default AnswerList;
