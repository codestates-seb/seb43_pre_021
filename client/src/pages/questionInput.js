import { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Container from '../components/Container.js';
import QuestionEditor from '../components/Question/questionEditor';
import Loading from '../components/loading';
import '@toast-ui/editor/dist/toastui-editor.css';
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const QuestionInput = () => {
  const editorRef = useRef(null);
  const { id } = useParams();

  const userinfo = useSelector(state => state.userinfo.user);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleContentChange = value => {
    setContent(value);
  };

  const handlePostBtn = e => {
    const instance = editorRef.current.getInstance();
    const content = instance.getMarkdown();
    e.preventDefault();

    if (title === '' || content === '') {
      alert('내용을 입력해주세요!');
    } else {
      axios
        .post('/question', {
          title: title,
          img: userinfo.img,
          displayName: userinfo.displayName,
          content: content,
        })
        .then(res => {
          const newId = res.data.questionId;
          document.location.href = `/questions/${newId}`;
        })
        .catch(error => {
          console.error(error);
        });
      setTitle('');
      setContent('');
      editorRef.current.getInstance().setMarkdown('');
    }
  };

  const handleUpdateBtn = e => {
    const instance = editorRef.current.getInstance();
    const content = instance.getMarkdown();
    e.preventDefault();

    if (title === '' || content === '') {
      alert('내용을 입력해주세요!');
    } else {
      axios
        .patch(`/question/${id}`, {
          title: title,
          content: content,
          displayName: userinfo.displayName,
          img: userinfo.img,
        })
        .then(res => {
          const id = res.data.questionId;
          document.location.href = `/questions/${id}`;
        })
        .catch(error => {
          console.error(error);
        });
      setTitle('');
      setContent('');
      editorRef.current.getInstance().setMarkdown('');
      setIsUpdate(false);
    }
  };

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      setIsUpdate(true);
      axios.get(`/question/${id}`).then(res => {
        setTitle(res.data.title);
        setContent(res.data.content);
        setIsLoading(false);
      });
    }
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <InputDiv>
          <PageTitle>
            질문하기
            <hr color="#d9d9d9" />
          </PageTitle>
          <QuestionEditor
            editorRef={editorRef}
            title={title}
            content={content}
            handleTitleChange={handleTitleChange}
            handleContentChange={handleContentChange}
          />
          {isUpdate ? (
            <Button onClick={handleUpdateBtn}>Update</Button>
          ) : (
            <Button onClick={handlePostBtn}>Post</Button>
          )}
        </InputDiv>
      )}
    </Container>
  );
};

const InputDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;

  @media (max-width: 1000px) {
    width: 700px;
  }
  @media (max-width: 800px) {
    width: 540px;
  }
`;

const PageTitle = styled.span`
  width: 100%;
  font-size: 2rem;
`;

const Button = styled.button`
  margin-top: 2rem;
  width: 5rem;
  height: 2.5rem;
  font-size: 20px;
  color: #ffffff;
  background-color: #e5883e;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  &:hover {
    background-color: #d67f3b;
  }
  &:active {
    background-color: #e5883e;
  }
`;

export default QuestionInput;
