import styled from 'styled-components';
import logo from '../assets/logo-stackoverflow.png';

const Container = styled.div`
  border: 1px solid red;
  height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ededed;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
  height: 90px;
`;

const LoginBox = styled.div`
  width: 300px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 3px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const LogoImg = styled.img`
  width: 300px;
  margin-bottom: 30px;
`;

const EmailBox = styled.div`
  width: 230px;
  margin-bottom: 15px;

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
  margin-bottom: 30px;

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

const CreateAccount = styled.div`
  margin-top: 20px;
  color: #999999;

  > a {
    text-decoration-line: underline;
    color: #3d7fff;
    margin-left: 5px;
  }
`;

function Login() {
  return (
    <>
      <Header> 헤 더 자 리 </Header>
      <Container>
        <LogoImg src={logo} />
        <LoginBox>
          <EmailBox>
            <div>Email</div>
            <input></input>
          </EmailBox>
          <PwdBox>
            <div>Password</div>
            <input></input>
          </PwdBox>

          <LoginBtn>Log in</LoginBtn>
        </LoginBox>
        <CreateAccount>Don&quot;t have an account ? Sign Up</CreateAccount>
      </Container>
    </>
  );
}

export default Login;
