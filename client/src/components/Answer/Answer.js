import '@toast-ui/editor/dist/toastui-editor.css';
import styled from 'styled-components';
import Button from '../button';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAnswer } from '../../actions/index';
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
  const dispatch = useDispatch();

  const [edit, setEdit] = useState(true);

  const userinfo = useSelector(state => state.userinfo.user);

  const handlePostBtn = () => {
    const instance = editorRef.current.getInstance();
    const content = instance.getMarkdown();

    axios
      .patch(`http://localhost:3001/QUESTION_DATA/${id}`, {
        answer: [
          {
            author: userinfo.displayName,
            id: id,
            content: content,
          },
        ],
      })
      .then(res => console.log(res.data))
      .catch(err => console.error(err));

    // dispatch(postAnswer(content));
  };

  const handleEditBtn = (idx, e) => {
    e.preventDefault();
    const instance = editorRef.current.getInstance();
    const content = instance.getMarkdown();
    dispatch(updateAnswer(idx, content));
    setEdit(false);
  };

  return (
    <>
      {props[0].from && edit ? (
        <>
          <Form>
            <Title>Edit Your Answer</Title>
            <StyledEditor
              initialValue={'hi'}
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
      ) : edit === false ? null : (
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
