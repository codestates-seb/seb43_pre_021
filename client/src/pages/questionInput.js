import { useRef, useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
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

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [data, setData] = useState([]);
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
        .post('http://localhost:3001/QUESTION_DATA', {
          id: data.length === 0 ? 1 : data[data.length - 1].id + 1,
          title: title,
          content: content,
          answer: [],
        })
        .then(res => {
          const newId = res.data.id;
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
        .put(`http://localhost:3001/QUESTION_DATA/${id}`, {
          title: title,
          content: content,
        })
        .then(res => {
          const id = res.data.id;
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
    axios.get('http://localhost:3001/QUESTION_DATA').then(res => setData(res.data));

    if (id) {
      setIsLoading(true);
      setIsUpdate(true);
      axios.get(`http://localhost:3001/QUESTION_DATA/${id}`).then(res => {
        setData(res.data);
        setTitle(res.data.title);
        setContent(res.data.content);
        setIsLoading(false);
      });
    }
  }, []);

  return (
    <Container>
      <Navigation />
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
