import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addQuestion } from '../store/questionSlice.js';
import { Editor } from '@toast-ui/react-editor';
import Navigation from '../components/Navigation';
import '@toast-ui/editor/dist/toastui-editor.css';
import styled from 'styled-components';

const QuestionInput = () => {
  const editorRef = useRef(null);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

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
    dispatch(addQuestion({ title, content }));
    console.log({ title, content });
    setTitle('');
    setContent('');
    editorRef.current.getInstance().setMarkdown('');
  };
  return (
    <>
      <Container>
        <Navigation />
        <InputDiv>
          <PageTitle>
            질문하기
            <hr color="#d9d9d9" />
          </PageTitle>

          <Form>
            <Label>제목</Label>
            <Input type="text" value={title} onChange={handleTitleChange}></Input>
          </Form>
          <Form>
            <Label>질문 내용</Label>
            <p>답변이 필요한 궁금하신 내용을 작성해주세요.</p>
            <StyledEditor
              ref={editorRef}
              placeholder="내용을 입력해주세요."
              value={content}
              onChange={handleContentChange}
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
          <Button onClick={handlePostBtn}>Post</Button>
        </InputDiv>
      </Container>
    </>
  );
};
const InputDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
`;
const Container = styled.div`
  display: flex;
`;

const PageTitle = styled.span`
  width: 100%;
  font-size: 2rem;
`;
const Form = styled.div`
  width: 100%;

  border: 1px solid #d9d9d9;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 0.5rem 0;
  p {
    margin-bottom: 1rem;
  }
`;
const Input = styled.input`
  height: 30px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
`;
const Label = styled.label`
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 0.7rem;
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
const StyledEditor = styled(Editor)`
  font-size: 16px;

  @media (max-width: 800px) {
    font-size: 11px;
  }
`;

export default QuestionInput;
