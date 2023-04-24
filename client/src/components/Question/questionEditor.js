import styled from 'styled-components';
import { Editor } from '@toast-ui/react-editor';

const QuestionEditor = ({ title, content, handleTitleChange, handleContentChange, editorRef }) => {
  return (
    <EditorDiv>
      <Form>
        <Label>제목</Label>
        <Input type="text" value={title} onChange={handleTitleChange}></Input>
      </Form>
      <Form>
        <Label>질문 내용</Label>
        <p>답변이 필요한 궁금하신 내용을 작성해주세요.</p>
        <Editor
          ref={editorRef}
          placeholder="내용을 입력해주세요."
          initialValue={content}
          value={content}
          onChange={handleContentChange}
          previewStyle="vertical" // 미리보기 스타일 지정
          height="300px" // 에디터 창 높이
          toolbarItems={[
            [
              'heading',
              'bold',
              'italic',
              'hr',
              'quote',
              'ul',
              'ol',
              'task',
              'table',
              'image',
              'link',
              'code',
              'codeblock',
            ],
          ]}
        ></Editor>
      </Form>
    </EditorDiv>
  );
};
const EditorDiv = styled.div`
  width: 100%;
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
export default QuestionEditor;
