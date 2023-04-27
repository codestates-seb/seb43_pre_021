import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Container from '../components/Container';
import Button from '../components/button';
import axios from 'axios';
import Answer from '../components/Answer/Answer';
import AnswerItems from '../components/Answer/AnswerItems';
import styled from 'styled-components';
import { Viewer } from '@toast-ui/react-editor';

const Question = () => {
  let { id } = useParams();

  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  const userId = useSelector(state => state.userinfo.user.id);

  const [question, setQuestion] = useState('');
  const [members, setMembers] = useState([]);

  const member = members.filter(el => el.displayName === question.displayName);

  const onDelete = () => {
    const confirmDelete = window.confirm('정말로 삭제하시겠습니까?');

    if (confirmDelete) {
      axios
        .delete(`${process.env.REACT_APP_API_URL}/question/${id}`)
        .then(() => {
          document.location.href = '/';
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
    axios.get(`${process.env.REACT_APP_API_URL}/question/${id}`).then(res => {
      setQuestion(res.data);
    });
  }, [id]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/members`)
      .then(res => {
        setMembers(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <Container>
      <QuestionDiv>
        {question && (
          <>
            <PageTitle>
              <div>
                <Link to={`/users/${member[0].memberId}`}>
                  <UserImg src={question.img} alt="userimg" />
                </Link>
                <span>{question.title}</span>
                <CreatedAt>
                  <p>{question.modifiedAt.slice(0, 10) || question.createdAt.slice(0, 10)}</p>
                </CreatedAt>
              </div>
              <Info>
                {isLoggedIn ? (
                  <Link to="/questions/ask">
                    <Button background="#4393f7" color="#ffffff">
                      Ask Question
                    </Button>
                  </Link>
                ) : (
                  <Link to="/login">
                    <Button background="#4393f7" color="#ffffff">
                      Ask Question
                    </Button>
                  </Link>
                )}
                {/* <Link to={`/users/${member.id}`}>
                  <DisplayName>{question.displayName}</DisplayName>
                </Link> */}
              </Info>
            </PageTitle>
            <ContentContainer>
              <Viewer initialValue={question.content} />
              {isLoggedIn && userId === member[0].memberId ? (
                <BtnContainer>
                  <Button onClick={onUpdate} background="none" border="#ffffff" color="#888888">
                    수정
                  </Button>
                  <Button onClick={onDelete} background="none" border="#ffffff" color="#888888">
                    삭제
                  </Button>
                </BtnContainer>
              ) : (
                <></>
              )}
            </ContentContainer>
          </>
        )}
        <AnswerContainer>
          <span>답변</span>

          <AnswerItems />

          <Answer id={id} />
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
    font-size: 1.6rem;
    margin-left: 15px;
  }
  p {
    margin: 17px 10px 0 10px;
    font-size: 1.3rem;
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
  padding: 2rem;
  span {
    font-size: 1.6rem;
  }
`;

const UserImg = styled.img`
  width: 37px;
  height: 36px;
  margin: 0 10px -8px 10px;
  border-radius: 5px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const CreatedAt = styled.div``;
export default Question;
