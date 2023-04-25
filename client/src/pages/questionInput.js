import { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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

  const questionData = 'http://localhost:3001/QUESTION_DATA';
  const userinfo = useSelector(state => state.userinfo.user);

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

    // 실제 서버 연결용
    // if (title === '' || content === '') {
    //   alert('내용을 입력해주세요!');
    // } else {
    //   axios
    //     .post('/question', {
    //       title: title,
    //       content: content,
    //     })
    //     .then(res => {
    //       const newId = res.data.questionId;
    //       document.location.href = `/questions/${newId}`;
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });
    //   setTitle('');
    //   setContent('');
    //   editorRef.current.getInstance().setMarkdown('');
    // }

    if (title === '' || content === '') {
      alert('내용을 입력해주세요!');
    } else {
      axios
        .post(`${questionData}`, {
          id: data.length === 0 ? 1 : data[data.length - 1].id + 1,
          title: title,
          content: content,
          answer: [],
          userinfo: userinfo,
        })
        .then(res => {
          console.log(res.data);
          // 실제 서버 연결용
          // const newId = res.data.questionId;

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

    // 실제 서버 연결용
    // if (title === '' || content === '') {
    //   alert('내용을 입력해주세요!');
    // } else {
    //   axios
    //     .patch(`/question/${id}`, {
    //       title: title,
    //       content: content,
    //     })
    //     .then(res => {
    //       const id = res.data.data.questionId;
    //       document.location.href = `/questions/${id}`;
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });
    //   setTitle('');
    //   setContent('');
    //   editorRef.current.getInstance().setMarkdown('');
    // }

    if (title === '' || content === '') {
      alert('내용을 입력해주세요!');
    } else {
      axios
        .patch(`${questionData}/${id}`, {
          title: title,
          content: content,
        })
        .then(res => {
          // 실제 서버 연결용
          // const id = res.data.data.questionId;

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

  // 실제 서버 연결용
  // useEffect(() => {
  //   if (id) {
  //     setIsUpdate(true);
  //     axios.get(`/question/${id}`).then(res => {
  //       setTitle(res.data.title);
  //       setContent(res.data.content);
  //     });
  //   }
  // }, []);

  useEffect(() => {
    axios.get(`${questionData}`).then(res => setData(res.data));

    if (id) {
      setIsLoading(true);
      setIsUpdate(true);
      axios.get(`${questionData}/${id}`).then(res => {
        setData(res.data);
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
