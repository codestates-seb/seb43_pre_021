import Container from '../components/Container';
import Member from '../components/Member';
import styled from 'styled-components';

const About = () => {
  return (
    <Container>
      <AboutDiv>
        <PageTitle>
          <div>
            <span>About</span>
            <p>♠️ 블랙잭</p>
          </div>
        </PageTitle>
        <AboutContainer>
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
                githubId="choalstn"
              />

              <div></div>
            </Front>
            <Back>
              <span>Back-end</span>
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
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  span {
    font-size: 2rem;
  }

  p {
    font-size: 1.8rem;
    font-weight: 700;
    margin-top: 40px;
  }
`;

const AboutContainer = styled.div`
  margin-left: 30px;
  margin-top: -10px;
  border-top: 2px solid #d9d9d9;
`;

const Team = styled.div``;

const Members = styled.div`
  border: 1px solid red;
  display: flex;
`;

const Front = styled.div`
  border-right: 2px solid #d9d9d9;
`;
const Back = styled.div``;

export default About;
