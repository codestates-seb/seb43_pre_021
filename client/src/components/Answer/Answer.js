import '@toast-ui/editor/dist/toastui-editor.css';
import styled from 'styled-components';
import Button from '../button';
import { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Editor } from '@toast-ui/react-editor';

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
  let [answer, setAnswer] = useState([]);

  answer = answer.filter(el => el.questionNum === Number(id));

  const userinfo = useSelector(state => state.userinfo.user);

  const handlePostBtn = () => {
    const instance = editorRef.current.getInstance();
    const content = instance.getMarkdown();
    axios
      .post(`${process.env.REACT_APP_API_URL}/answer`, {
        questionNum: id,
        displayName: userinfo.displayName,
        content: content,
        vote: 0,
      })
      .then(() => {})
      .catch(err => console.error(err));
    document.location.href = `/questions/${id}`;
  };

  const handleEditBtn = (answerId, e) => {
    e.preventDefault();
    const instance = editorRef.current.getInstance();
    const content = instance.getMarkdown();

    const editedAnswer = answer.find(q => q.answerId === answerId);

    axios
      .patch(`${process.env.REACT_APP_API_URL}/answer/${editedAnswer.answerId}`, {
        content: content,
        displayName: userinfo.displayName,
      })
      .then(() => {
        setEdit(false);
        document.location.href = `/questions/${id}`;
      });
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/answer`).then(res => {
      setAnswer(res.data);
    });
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
              previewStyle="vertical"
              height="300px"
              initialEditType="wysiwyg"
              toolbarItems={[
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
      ) : edit === false ? null : answer.filter(el => el.displayName === userinfo.displayName)
          .length > 0 ? null : (
        <>
          <Form>
            <Title>Your Answer</Title>
            <StyledEditor
              placeholder="내용을 입력해주세요."
              ref={editorRef}
              previewStyle="vertical"
              height="300px"
              initialEditType="wysiwyg"
              toolbarItems={[
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
