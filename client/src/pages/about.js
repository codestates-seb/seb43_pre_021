import Container from '../components/Container';
import Member from '../components/Member';
import styled from 'styled-components';
import github from '../assets/github.png';

const About = () => {
  const handleClick = () => {
    window.open('https://github.com/codestates-seb/seb43_pre_021');
  };
  return (
    <Container>
      <AboutDiv>
        <PageTitle>
          <span>About</span>
        </PageTitle>
        <AboutContainer>
          <TeamTitle>
            <p>♠️ 블랙잭</p>
            <GithubImg src={github} alt="githubimg" onClick={handleClick} />
          </TeamTitle>
          <Team>
            <span>What is Black-Jack ?</span>
            <p>
              카드의 합이 먼저 21이 되는 사람이 이기는 카드 게임 방식으로, pre-preoject 21번 팀인
              우리의 성공지향적인 네이밍
            </p>
          </Team>

          <Members>
            <Front>
              <span>Front-end</span>
              <Member
                img="https://images.unsplash.com/photo-1680903413454-ff0f93efbcc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80"
                name="조민수"
                githubId="@choalstn"
                url="https://github.com/Choalstn"
              />

              <Member
                img="https://images.unsplash.com/photo-1680903413454-ff0f93efbcc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80"
                name="여동희"
                githubId="@Latada"
                url="https://github.com/Latada"
              />

              <Member
                img="https://images.unsplash.com/photo-1680903413454-ff0f93efbcc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80"
                name="송하은"
                githubId="@songhaeunsong"
                url="https://github.com/songhaeunsong"
              />

              <div></div>
            </Front>
            <Back>
              <span>Back-end</span>

              <Member
                img="https://images.unsplash.com/photo-1680903413454-ff0f93efbcc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80"
                name="임슬범"
                githubId="@Seulime"
                url="https://github.com/Seulime"
              />

              <Member
                img="https://images.unsplash.com/photo-1680903413454-ff0f93efbcc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80"
                name="백철현"
                githubId="@bch0520"
                url="https://github.com/bch0520"
              />
            </Back>
          </Members>
        </AboutContainer>
      </AboutDiv>
    </Container>
  );
};

const AboutDiv = styled.div`
  width: 100%;
`;

const PageTitle = styled.div`
  span {
    font-size: 2rem;
  }
  width: 100%;
  padding: 2rem;
  font-weight: 600;
`;

const GithubImg = styled.img`
  margin-left: 20px;
  width: 80px;

  &:hover {
    cursor: pointer;
  }
`;

const AboutContainer = styled.div`
  margin-left: 35px;
  margin-top: -10px;
`;

const TeamTitle = styled.div`
  border-bottom: 2px solid #d9d9d9;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 20px;
  margin-top: -30px;
  span {
    font-size: 2rem;
  }

  p {
    font-size: 1.8rem;
    font-weight: 700;
    margin-top: 40px;
  }
`;

const Team = styled.div`
  margin-top: 30px;
  margin-left: 10px;

  span {
    font-size: 1.2rem;
    font-weight: 550;
  }

  p {
    margin-top: 15px;
  }
`;

const Members = styled.div`
  margin-top: 70px;
  margin-left: 10px;

  display: flex;
`;

const Front = styled.div`
  width: 50%;
  border-right: 2px solid #d9d9d9;

  span {
    font-size: 1.1rem;
    font-weight: bold;
  }
`;
const Back = styled.div`
  width: 50%;
  margin-left: 25px;

  span {
    font-size: 1.1rem;
    font-weight: bold;
  }
`;

export default About;
