import '@toast-ui/editor/dist/toastui-editor.css';
import styled from 'styled-components';
import Button from '../button';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Editor } from '@toast-ui/react-editor';
import { useEffect } from 'react';

const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
  margin: 20px 0;
`;

const Form = styled.div`
  width: 900px;

  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 0.5rem 0;
  p {
    margin-bottom: 1rem;
  }
`;

const StyledEditor = styled(Editor)`
  font-size: 16px;

  @media (max-width: 800px) {
    font-size: 11px;
  }
`;

const Answer = (...props) => {
  let { id } = useParams();
  const editorRef = useRef(null);

  const [edit, setEdit] = useState(true);
  const [answer, setAnswer] = useState([]);

  const userinfo = useSelector(state => state.userinfo.user);

  const questionData = 'http://localhost:3001/QUESTION_DATA';

  // 실제 서버 연결용
  // const handlePostBtn = () => {
  //   const instance = editorRef.current.getInstance();
  //   const content = instance.getMarkdown();
  //   axios
  //     .post(`/answer`, {
  //       // author: userinfo.displayName,
  //       content: content,
  //     })
  //     .then(res => {
  //       console.log('cc', content);
  //       console.log('aa', res.data);
  //       navigate(`/questions/${id}`);
  //     })
  //     .catch(err => console.error(err));
  //   // document.location.href = `/questions/${id}`;

  //   // dispatch(postAnswer(content));
  // };

  const handlePostBtn = () => {
    const instance = editorRef.current.getInstance();
    const content = instance.getMarkdown();

    axios
      .patch(`${questionData}/${id}`, {
        answer: [
          ...answer,
          { author: userinfo.displayName, id: answer.length + 1, content: content, vote: 0 },
        ],
      })
      .then(res => {
        console.log('res', res.data);
        document.location.href = `/questions/${id}`;
      })
      .catch(err => console.error(err));

    // dispatch(postAnswer(content));
  };

  //실제 서버 연결용
  // const handleEditBtn = () => {
  //   const instance = editorRef.current.getInstance();
  //   const content = instance.getMarkdown();
  //   axios
  //     .patch(`${questionData}/${id}`, {
  //       answer: [
  //         {
  //           author: userinfo.displayName,
  //           id: id,
  //           content: content,
  //         },
  //       ],
  //     })
  //     .then(res => console.log(res.data))
  //     .catch(err => console.error(err));

  //   setEdit(false);
  //   document.location.href = `/questions/${id}`;
  // };

  const handleEditBtn = (answerId, e) => {
    e.preventDefault();
    const instance = editorRef.current.getInstance();
    const content = instance.getMarkdown();

    console.log('aa', answer);

    const editedAnswer = answer.find(q => q.id === answerId);
    const updatedAnswer = {
      ...editedAnswer,
      content: content,
    };

    const otherAnswers = answer.filter(q => q.id !== answerId);

    axios
      .patch(`${questionData}/${id}`, {
        answer: [...otherAnswers, updatedAnswer],
      })
      .then(res => console.log('res', res.data))
      .catch(err => console.error(err));

    setEdit(false);
    document.location.href = `/questions/${id}`;
  };

  useEffect(() => {
    axios.get(`${questionData}/${id}`).then(res => setAnswer(res.data.answer));
  }, []);

  return (
    <>
      {props[0].from && edit ? (
        <>
          <Form>
            <Title>Edit Your Answer</Title>
            <StyledEditor
              initialValue={props[0].text}
              ref={editorRef}
              previewStyle="vertical" // 미리보기 스타일 지정
              height="300px" // 에디터 창 높이
              initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
              toolbarItems={[
                // 툴바 옵션 설정
                ['heading', 'bold', 'italic', 'strike'],
                ['hr', 'quote'],
                ['ul', 'ol', 'task', 'indent', 'outdent'],
                ['table', 'image', 'link'],
                ['code', 'codeblock'],
              ]}
            ></StyledEditor>
          </Form>

          <Button onClick={e => handleEditBtn(props[0].idx, e)}>Edit</Button>
        </>
      ) : edit === false ? null : answer.filter(el => el.author === userinfo.displayName).length >
        0 ? null : (
        <>
          <Form>
            <Title>Your Answer</Title>
            <StyledEditor
              placeholder="내용을 입력해주세요."
              ref={editorRef}
              previewStyle="vertical" // 미리보기 스타일 지정
              height="300px" // 에디터 창 높이
              initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
              toolbarItems={[
                // 툴바 옵션 설정
                ['heading', 'bold', 'italic', 'strike'],
                ['hr', 'quote'],
                ['ul', 'ol', 'task', 'indent', 'outdent'],
                ['table', 'image', 'link'],
                ['code', 'codeblock'],
              ]}
            ></StyledEditor>
          </Form>
          <Button onClick={handlePostBtn}>Post your Answer</Button>
        </>
      )}
    </>
  );
};

export default Answer;
