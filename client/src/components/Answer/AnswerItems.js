import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import Answer from './Answer';
import { Viewer } from '@toast-ui/react-editor';
import { useParams } from 'react-router-dom';
import axios from 'axios';
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
      console.log(result);

      axios.patch(`${questionData}/${id}`, { answer: result }).then(() => {
        const updatedAnswers = a.filter((el, i) => i !== idx);
        setA(updatedAnswers);
      });
    });
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
              </Container>
            </div>
          ))
        : null}
    </>
  );
};

export default AnswerItems;
