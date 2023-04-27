import styled from 'styled-components';
import Button from '../../../button';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../../actions';

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
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  gap: 20px;
  .section_display {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .listStyle {
      list-style: disc;
      line-height: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-left: 25px;
    }
    p {
      line-height: 2rem;
    }
  }
`;
const CheckDelete = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .check {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
  }
  .deleteBtn {
    display: flex;
    justify-content: flex-end;
  }
`;
function DeleteSection({ isLoggedIn, user }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleDelete(event) {
    event.preventDefault();

    axios.delete(`/members/${user.memberId}`).then(!isLoggedIn);
    dispatch(logout());
    navigate('/');
  }
  return (
    <EditSectionBlock>
      <SectionHeader>
        <h3>Delete profile</h3>
      </SectionHeader>
      <SectionBlock onSubmit={handleDelete}>
        <div className="section_display">
          <ul className="listStyle">
            <li>
              {`삭제는 되돌릴 수 없으며, 이 삭제가 수행된 후 마음이 바뀌더라도 원래 내용을 되찾을
              방법이 없습니다.사용자의 질문과 답변은 사이트에 남아 있지만 연결 해제 및 익명
              처리됩니다.(작성자는 "user21639778"로 나열됩니다.)`}
            </li>
            <li>나중에 사이트로 돌아가더라도 사용자의 권한을 표시하지 않습니다.</li>
          </ul>
          <p>
            삭제를 확인하면 스택 오버플로의 프로필만 삭제되고 스택 Exchange 네트워크의 다른
            프로필에는 영향을 주지 않습니다.
          </p>
          <p>
            여러 프로파일을 삭제하려면 각 사이트를 개별적으로 방문하여 해당 개별 프로파일의 삭제를
            요청해야 합니다.
          </p>
        </div>
        <CheckDelete className="btns">
          <div className="check">
            <input type="checkbox" required />
            <p>
              위에 언급된 정보를 읽었으며, 해당 프로필을 삭제하는 것이 의미를 이해했습니다. 제
              프로필 삭제를 진행하겠습니다.
            </p>
          </div>
          <div className="deleteBtn">
            <Button border="#E39A9A" background="#E39A9A" type="submit">
              Delete profile
            </Button>
          </div>
        </CheckDelete>
      </SectionBlock>
    </EditSectionBlock>
  );
}

export default DeleteSection;
