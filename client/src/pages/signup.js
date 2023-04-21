import styled from 'styled-components';
import logo from '../assets/logo-stackoverflow.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Container = styled.div`
  height: calc(100vh - 75px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ededed;
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

function SignUp() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [clikedSignup, setClickedSignup] = useState(false);
  const [userData, setUserData] = useState([]);

  const handleDisplayName = e => {
    setDisplayName(e.target.value);
  };

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handlePwd = e => {
    setPwd(e.target.value);
  };

  const handleSignUpBtn = () => {
    setClickedSignup(!clikedSignup);

    if (!displayName || !email || !pwd) {
      setClickedSignup(true);
    }

    if (displayName && email && pwd) {
      axios
        .post('http://localhost:3001/USER_DATA', {
          id: userData.length + 1,
          img: 'https://images.unsplash.com/photo-1680903413454-ff0f93efbcc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80',
          displayName: displayName,
          email: email,
          pwd: pwd,
        })
        .then(() => {
          document.location.href = '/login';
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  useEffect(() => {
    axios.get('http://localhost:3001/USER_DATA').then(res => setUserData(res.data));
  }, []);

  return (
    <>
      <Container>
        <LogoBox>
          <LogoImg src={logo} />
          <div>Join the Stack Overflow community</div>
        </LogoBox>
        <SignUpBox>
          <DisplayNameBox>
            <div>Display Name</div>
            <input onChange={handleDisplayName}></input>
            {clikedSignup && !displayName ? (
              <Alert>
                <p>⚠️</p>Please enter your display name
              </Alert>
            ) : null}
          </DisplayNameBox>
          <EmailBox>
            <div>Email</div>
            <input onChange={handleEmail}></input>
            {clikedSignup && !email ? (
              <Alert>
                <p>⚠️</p>Please enter your email
              </Alert>
            ) : null}
          </EmailBox>
          <PwdBox>
            <div>Password</div>
            <input type="password" onChange={handlePwd}></input>
            {clikedSignup && !pwd ? (
              <Alert>
                <p>⚠️</p>Please enter your display password
              </Alert>
            ) : null}
          </PwdBox>
          <LoginBtn onClick={handleSignUpBtn}>Sign Up</LoginBtn>
        </SignUpBox>
      </Container>
    </>
  );
}

export default SignUp;
