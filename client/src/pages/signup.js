import styled from 'styled-components';
import logo from '../assets/logo-stackoverflow.png';

const Container = styled.div`
  height: calc(100vh - 90px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ededed;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
`;

const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 100px;

  > div {
    font-size: 27px;
    margin-top: 20px;
    padding-left: 70px;
    font-weight: 400;
  }
`;

const LogoImg = styled.img`
  width: 550px;
`;

const SignUpBox = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 3px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const DisplayNameBox = styled.div`
  width: 230px;
  margin-bottom: 20px;

  > div {
    font-weight: 500;
  }

  > input {
    background: #ffffff;
    border: 0.3px solid #999999;
    border-radius: 6px;
    width: 225px;
    height: 30px;
    margin-top: 5px;
  }
`;

const EmailBox = styled.div`
  width: 230px;
  margin-bottom: 20px;

  > div {
    font-weight: 500;
  }

  > input {
    background: #ffffff;
    border: 0.3px solid #999999;
    border-radius: 6px;
    width: 225px;
    height: 30px;
    margin-top: 5px;
  }
`;

const PwdBox = styled.div`
  width: 230px;
  margin-bottom: 50px;

  > div {
    font-weight: 500;
  }

  > input {
    background: #ffffff;
    border: 0.3px solid #999999;
    border-radius: 6px;
    width: 225px;
    height: 30px;
    margin-top: 5px;
  }
`;

const LoginBtn = styled.div`
  width: 230px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #4393f7;
  border-radius: 6px;
  color: white;
  padding: 3px 0;
  font-size: 17px;
  font-weight: 450;
`;

function SignUp() {
  return (
    <>
      <Header>헤 더 자 리</Header>
      <Container>
        <LogoBox>
          <LogoImg src={logo} />
          <div>Join the Stack Overflow community</div>
        </LogoBox>
        <SignUpBox>
          <DisplayNameBox>
            <div>Display Name</div>
            <input></input>
          </DisplayNameBox>
          <EmailBox>
            <div>Email</div>
            <input></input>
          </EmailBox>
          <PwdBox>
            <div>Password</div>
            <input></input>
          </PwdBox>
          <LoginBtn>Sign Up</LoginBtn>
        </SignUpBox>
      </Container>
    </>
  );
}

export default SignUp;
