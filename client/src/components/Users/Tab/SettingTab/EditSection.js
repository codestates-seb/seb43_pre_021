import styled from 'styled-components';
import Button from '../../../button';

const EditSectionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: calc(100% - 220px - 24px);
  flex-grow: 1;
`;
const SectionHeader = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: bold;
    border-bottom: 1px solid #000;
  }
`;
const SectionBlock = styled.form`
  border: 2px solid #d9d9d9;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  div:not(.btns) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    label {
      font-size: 1.2rem;
      font-weight: bold;
    }
    input {
      border: 1px solid #d9d9d9;
      border-radius: 10px;
      font-size: 1.125rem;
      padding: 5px 8px;
    }
    textarea {
      border: 1px solid #d9d9d9;
      border-radius: 10px;
      font-size: 1.125rem;
      padding: 5px 8px;
      resize: none;
      height: 300px;
    }
  }
`;
const BtnBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

function EditSection() {
  return (
    <EditSectionBlock>
      <SectionHeader>
        <h3>Edit your profile</h3>
      </SectionHeader>
      <SectionBlock>
        <div>
          <label htmlFor="image">Photo image</label>
          <input id="image" type="file" accept="image/*" />
        </div>
        <div>
          <label htmlFor="displayName">Display name</label>
          <input id="displayName" type="text" />
        </div>
        <div>
          <label htmlFor="aboutMe">About me</label>
          <textarea id="aboutMe"></textarea>
        </div>
        <BtnBlock className="btns">
          <Button>Save profile</Button>
          <Button color="#4393f7" background="#fff" border="#fff">
            cancle
          </Button>
        </BtnBlock>
      </SectionBlock>
    </EditSectionBlock>
  );
}

export default EditSection;
