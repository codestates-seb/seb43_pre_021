import styled from 'styled-components';
import Button from '../../../button';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

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
`;
const BtnBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

function EditSection({ user }) {
  // const userData = 'http://localhost:3001/USER_DATA';
  const { id } = useParams();
  const [editData, setEditData] = useState({});
  const navigate = useNavigate();

  function handleChange(e) {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // 실제 서버용
    axios.patch(`/members/${id}`, editData).then(navigate(`/users/${id}`));
    // axios.patch(`${userData}/${id}`, editData).then(navigate(`/users/${id}`));
  }

  return (
    <EditSectionBlock>
      <SectionHeader>
        <h3>Edit your profile</h3>
      </SectionHeader>
      <SectionBlock onSubmit={handleSubmit}>
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
            cancel
          </Button>
        </BtnBlock>
      </SectionBlock>
    </EditSectionBlock>
  );
}

export default EditSection;
