import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProfileSection = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const StatsView = styled.ol`
  display: inline-block;
  padding: 15px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  margin-right: 30px;
  li {
    display: flex;
    flex-direction: column;
    padding: 10px 16px;
  }
  span {
    font-size: 1.5rem;
  }
  h4 {
    color: #999999;
    margin-top: 3px;
  }
`;

const Stats = styled.div`
  flex-grow: 1;
  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  .stat {
    margin-top: 30px;
  }
`;

const StatsBlock = styled.div`
  padding: 32px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  background: #ece9e9;
`;

function ProfileTab({ user, isLoggedIn, userinfo }) {
  const question = false;
  return (
    <ProfileSection>
      <StatsView>
        <li>
          <span>0</span>
          <h4>Question</h4>
        </li>
        <li>
          <span>0</span>
          <h4>Answer</h4>
        </li>
      </StatsView>
      <Stats>
        <div className="stat">
          <h2>About</h2>
          <StatsBlock>
            {user.about !== null ? (
              user.about
            ) : isLoggedIn && userinfo === user.id ? (
              <Link to={`/users/edit/${user.id}`}>edit profile</Link>
            ) : (
              <p>본인 소개란이 비었습니다.</p>
            )}
          </StatsBlock>
        </div>
        <div className="stat">
          <h2>Post</h2>
          <StatsBlock>{question ? '질문내용' : '질문이 없습니다.'}</StatsBlock>
        </div>
      </Stats>
    </ProfileSection>
  );
}

export default ProfileTab;
