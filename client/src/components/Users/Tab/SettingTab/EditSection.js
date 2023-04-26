import styled from 'styled-components';
import Button from '../../../button';
import { useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
  gap: 30px;
  .editBlock {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .label {
    font-size: 1.2rem;
    font-weight: bold;
  }
  .imgBlock {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    position: relative;
  }
  .imgBtn {
    cursor: pointer;
    background: #696868;
    color: #fff;
    padding: 8px 14px 5px;
    border-radius: 5px;
    position: absolute;
    bottom: -5px;
  }
  input {
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    font-size: 1.125rem;
    padding: 5px 8px;
    &[type='file'] {
      display: none;
    }
  }
  textarea {
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    font-size: 1.125rem;
    padding: 5px 8px;
    resize: none;
    height: 300px;
  }
`;
const BtnBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

const Img = styled.div`
  margin-top: 10px;
  width: 128px;
  height: 128px;
  border-radius: 50%;
  background: ${props => `url(${props.background}) no-repeat center`};
  background-size: 128px;
`;

function EditSection({ user }) {
  const userData = 'http://localhost:3001/USER_DATA';
  const [editData, setEditData] = useState({});
  const navigate = useNavigate();

  const [imgFile, setImgFile] = useState('');
  const imgRef = useRef();

  // 이미지 업로드 input의 onChange
  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  function handleChange(e) {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    axios.patch(`${userData}/${user.id}`, editData).then(navigate(`/users/${user.id}`));
    console.log(editData);
  }

  return (
    <EditSectionBlock>
      <SectionHeader>
        <h3>Edit your profile</h3>
      </SectionHeader>
      <SectionBlock onSubmit={handleSubmit}>
        <div className="imgBlock">
          <h3 className="label">Photo image</h3>
          <Img background={imgFile ? imgFile : user.img} />
          <input
            id="image"
            name="img"
            type="file"
            accept="image/*"
            onChange={saveImgFile}
            ref={imgRef}
          />
          <label htmlFor="image" className="imgBtn">
            Change picture
          </label>
        </div>
        <div className="editBlock">
          <label htmlFor="displayName" className="label">
            Display name
          </label>
          <input
            id="displayName"
            name="displayName"
            type="text"
            defaultValue={user.displayName}
            onChange={handleChange}
          />
        </div>
        <div className="editBlock">
          <label htmlFor="about" className="label">
            About me
          </label>
          <textarea id="about" name="about" onChange={handleChange}></textarea>
        </div>
        <BtnBlock className="btns">
          <Button type="submit">Save profile</Button>
          <Button color="#4393f7" background="#fff" border="#fff" onClick={() => navigate('')}>
            cancle
          </Button>
        </BtnBlock>
      </SectionBlock>
    </EditSectionBlock>
  );
}

export default EditSection;
