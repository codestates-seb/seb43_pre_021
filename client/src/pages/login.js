import styled from 'styled-components';
import logo from '../assets/logo-stackoverflow.png';
import { useState, useRef } from 'react';
import axios from 'axios';

const Container = styled.div`
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

const Alert = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  display: flex;

  > p {
    color: orange;
    font-size: 15px;
    margin-right: 5px;
  }
`;

function Login() {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [clickLogin, setClickLogin] = useState(false);

  const emailInput = useRef(null);
  const pwdInput = useRef(null);

  const handleEmail = e => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handlePwd = e => {
    setPwd(e.target.value);
    console.log(pwd);
  };

  const handleLoginBtn = () => {
    setClickLogin(!clickLogin);

    // 이메일과 비번이 작성되지 않은 상태에서 로그인 버튼을 여러번 눌러도 경고창이 뜨기 위함
    // 아래 if 로직이 없다면 로그인 버튼을 클릭함에 따라 clickLogin 값이 달라져서 email, pwd가 빈 값임에도 경고창이 없어지는 경우 발생
    if (!email || !pwd) {
      setClickLogin(true);
    }

    if (email && pwd) {
      axios.get('http://localhost:3001/USER_DATA', { email, pwd }).then(res => {
        res.data.filter(el => el.userID === email) && res.data.filter(el => el.pwd === pwd)
          ? console.log('Access')
          : console.log('Fail');
      });
    }
  };
  return (
    <>
      <Header> 헤 더 자 리 </Header>
      <Container>
        <LogoImg src={logo} />
        <LoginBox>
          <EmailBox>
            <div>Email</div>
            <input onChange={handleEmail} ref={emailInput}></input>
            {clickLogin && !email ? (
              <Alert>
                <p>⚠️</p>Please enter your email
              </Alert>
            ) : null}
          </EmailBox>
          <PwdBox>
            <div>Password</div>
            <input onChange={handlePwd} ref={pwdInput}></input>
            {clickLogin && !pwd ? (
              <Alert>
                <p>⚠️</p> Please enter your password
              </Alert>
            ) : null}
          </PwdBox>

          <LoginBtn onClick={handleLoginBtn}>Log in</LoginBtn>
        </LoginBox>
        <CreateAccount>Don&quot;t have an account ? Sign Up</CreateAccount>
      </Container>
    </>
  );
}

export default Login;
