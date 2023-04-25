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
  // const answers = useSelector(state => state.answer.answers);
  const userinfo = useSelector(state => state.userinfo.user);
  const [update, setUpdate] = useState(false);
  const [a, setA] = useState([]);

  const questionData = 'http://localhost:3001/QUESTION_DATA';

  let { id } = useParams();

  const handleUpdate = () => {
    setUpdate(!update);
  };

  // 실제 서버 연결용
  // const handleDelete = (idx, e) => {
  //   e.preventDefault();
  //   axios.get(`${questionData}/${id}`).then(res => {
  //     const deleteEl = res.data.answer.filter(el => el.id == idx + 1);
  //     const result = res.data.answer.filter(el => el.id !== deleteEl[0].id);
  //     console.log(result);

  //     axios.patch(`${questionData}/${id}`, { answer: result }).then(() => {
  //       const updatedAnswers = a.filter((el, i) => i !== idx);
  //       setA(updatedAnswers);
  //     });
  //   });
  // };

  const handleDelete = (idx, e) => {
    e.preventDefault();
    axios.get(`${questionData}/${id}`).then(res => {
      const deleteEl = res.data.answer.filter(el => el.id == idx + 1);
      const result = res.data.answer.filter(el => el.id !== deleteEl[0].id);

      axios.patch(`${questionData}/${id}`, { answer: result }).then(() => {
        const updatedAnswers = a.filter((el, i) => i !== idx);
        setA(updatedAnswers);
      });
    });
  };

  const handleUp = (answerId, e) => {
    e.preventDefault();
    const clickedAnswer = a.find(q => q.id === answerId);

    const updatedAnswer = {
      ...clickedAnswer,
      vote: clickedAnswer.vote + 1,
    };

    const otherAnswers = a.filter(q => q.id !== answerId);

    axios
      .patch(`${questionData}/${id}`, {
        answer: [...otherAnswers, updatedAnswer],
      })
      .then(res => setA(res.data.answer))
      .catch(err => console.error(err));
  };

  const handleDown = (answerId, e) => {
    e.preventDefault();
    const clickedAnswer = a.find(q => q.id === answerId);

    console.log('a', a);

    const updatedAnswer = {
      ...clickedAnswer,
      vote: clickedAnswer.vote - 1,
    };

    const otherAnswers = a.filter(q => q.id !== answerId);

    axios
      .patch(`${questionData}/${id}`, {
        answer: [...otherAnswers, updatedAnswer],
      })
      .then(res => setA(res.data.answer))
      .catch(err => console.error(err));
  };

  // 실제 서버  연결용
  // useEffect(() => {
  //   axios.get(`/answer`).then(res => {
  //     console.log(res.data);
  //     setA(res.data.answer);
  //   });
  // }, []);

  useEffect(() => {
    axios.get(`${questionData}/${id}`).then(res => {
      setA(res.data.answer);
    });
  }, []);

  return (
    <>
      {a
        ? a.map((el, idx) => (
            <div key={idx}>
              <Container>
                <div>
                  {el.author === userinfo.displayName ? null : (
                    <>
                      <VscTriangleUp
                        size={30}
                        color="rgb(187, 191, 195)"
                        onClick={e => handleUp(idx + 1, e)}
                      />
                      <p>{el.vote}</p>
                      <VscTriangleDown
                        size={30}
                        color="rgb(187, 191, 195)"
                        onClick={e => handleDown(idx + 1, e)}
                      />
                    </>
                  )}
                </div>
                <div>
                  <div>
                    <UserInfo>
                      <UserImg src={userinfo.img} alt="userimg" />
                      <p>{el.author}</p>
                    </UserInfo>

                    <IconContainer>
                      {el.author === userinfo.displayName ? (
                        <>
                          <BsPencilSquare onClick={handleUpdate} />
                          <BsTrash onClick={e => handleDelete(idx, e)} />
                        </>
                      ) : null}
                    </IconContainer>
                  </div>
                  <Viewer key={idx} initialValue={el.content} />
                  {update && el.author === userinfo.displayName ? (
                    <Answer from={update} text={el.content} idx={idx + 1} author={el.author} />
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
