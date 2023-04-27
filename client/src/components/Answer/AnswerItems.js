import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';
import { VscTriangleUp, VscTriangleDown } from 'react-icons/vsc';
import { useEffect, useState } from 'react';
import Answer from './Answer';
import { Viewer } from '@toast-ui/react-editor';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const Container = styled.div`
  border-bottom: 1px solid rgb(214, 217, 219);
  padding: 10px;
  margin: 10px;
  display: flex;

  > div:nth-child(1) {
    width: 40px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  > div:nth-child(2) {
    width: 100%;
    > div {
      display: flex;
      justify-content: space-between;
    }
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

const AnswerItems = () => {
  const userinfo = useSelector(state => state.userinfo.user);
  const [update, setUpdate] = useState(false);
  let [answers, setAnswers] = useState([]);

  let { id } = useParams();

  answers = answers.filter(el => el.questionNum === Number(id));

  const handleUpdate = () => {
    setUpdate(!update);
  };

  const handleDelete = (idx, e) => {
    e.preventDefault();
    axios.get(`${process.env.REACT_APP_API_URL}/answer`).then(res => {
      const deleteEl = res.data.filter(el => el.answerId == idx);

      axios
        .delete(`/answer/${deleteEl[0].answerId}`)
        .then(() =>
          axios.get(`${process.env.REACT_APP_API_URL}/answer`).then(res => setAnswers(res.data))
        );
    });
  };

  const handleUp = (answerId, author) => {
    if (author === userinfo.displayName) {
      alert('본인의 답글은 투표할 수 없습니다');
    } else {
      const clickedAnswer = answers.find(q => q.answerId === answerId);

      axios
        .patch(`${process.env.REACT_APP_API_URL}/answer/${clickedAnswer.answerId}`, {
          vote: clickedAnswer.vote + 1,
          displayName: clickedAnswer.displayName,
          content: clickedAnswer.content,
        })
        .then(() => {
          axios.get(`${process.env.REACT_APP_API_URL}/answer`).then(res => setAnswers(res.data));
        });
    }
  };

  const handleDown = (answerId, author) => {
    if (author === userinfo.displayName) {
      alert('본인의 답글은 투표할 수 없습니다');
    } else {
      const clickedAnswer = answers.find(q => q.answerId === answerId);

      axios
        .patch(`${process.env.REACT_APP_API_URL}/answer/${clickedAnswer.answerId}`, {
          vote: clickedAnswer.vote - 1,
          displayName: clickedAnswer.displayName,
          content: clickedAnswer.content,
        })
        .then(() =>
          axios.get(`${process.env.REACT_APP_API_URL}/answer`).then(res => setAnswers(res.data))
        );
    }
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/answer`).then(res => {
      setAnswers(res.data);
    });
  }, []);

  return (
    <>
      {answers
        ? answers.map((el, idx) => (
            <div key={idx}>
              <Container>
                <div>
                  <VscTriangleUp
                    size={30}
                    color="rgb(187, 191, 195)"
                    onClick={() => handleUp(el.answerId, el.displayName)}
                  />
                  <p>{el.vote}</p>
                  <VscTriangleDown
                    size={30}
                    color="rgb(187, 191, 195)"
                    onClick={() => handleDown(el.answerId, el.displayName)}
                  />
                </div>
                <div>
                  <div>
                    <UserInfo>
                      <UserImg src={userinfo.img} alt="userimg" />
                      <p>{el.displayName}</p>
                    </UserInfo>

                    <IconContainer>
                      {el.displayName === userinfo.displayName ? (
                        <>
                          <BsPencilSquare onClick={handleUpdate} />
                          <BsTrash onClick={e => handleDelete(el.answerId, e)} />
                        </>
                      ) : null}
                    </IconContainer>
                  </div>
                  <Viewer key={idx} initialValue={el.content} />
                  {update && el.displayName === userinfo.displayName ? (
                    <Answer
                      from={update}
                      text={el.content}
                      idx={el.answerId}
                      displayName={el.displayName}
                    />
                  ) : null}
                </div>
              </Container>
            </div>
          ))
        : null}
    </>
  );
};

export default AnswerItems;
