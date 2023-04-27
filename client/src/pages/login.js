import styled from 'styled-components';
import logo from '../assets/logo-stackoverflow.png';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login, loginSuccess } from '../actions/index';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: calc(100vh - 75px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ededed;
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
  cursor: pointer;
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
  const [emailErr, setEmailErr] = useState(false);
  const [pwdErr, setPwdErr] = useState(false);
  const [members, setMembers] = useState([]);

  const emailInput = useRef(null);
  const pwdInput = useRef(null);

  const dispatch = useDispatch();

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handlePwd = e => {
    setPwd(e.target.value);
  };

  const handleLoginBtn = () => {
    setClickLogin(!clickLogin);

    if (!email || !pwd) {
      setClickLogin(true);
    }

    if (email && pwd) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/auth/login`, { username: email, password: pwd })
        .then(res => {
          if (res.status === 200) {
            const userEmail = members.filter(el => el.email === email);
            dispatch(login());
            dispatch(
              loginSuccess({
                displayName: userEmail[0].displayName,
                img: userEmail[0].img,
                id: userEmail[0].memberId,
              })
            );

            document.location.href = '/';
          }
        })
        .catch(() => {
          const userEmail = members.filter(el => el.email === email);
          const userPwd = members.filter(el => el.pwd === pwd);

          if (userEmail.length === 0 && userPwd.length === 0) {
            setEmailErr(true);
            setPwdErr(true);
          } else if (userEmail.length === 0) {
            setPwdErr(false);
            setEmailErr(true);
          } else if (userPwd.length === 0) {
            setEmailErr(false);
            setPwdErr(true);
          }
        });
    }
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/members`)
      .then(res => {
        setMembers(res.data);
      })
      .catch(err => console.error(err));
  }, []);
  return (
    <>
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
            <input type="password" onChange={handlePwd} ref={pwdInput}></input>
            {clickLogin && !pwd ? (
              <Alert>
                <p>⚠️</p> Please enter your password
              </Alert>
            ) : null}
          </PwdBox>

          <LoginBtn onClick={handleLoginBtn}>Log in</LoginBtn>
          {emailErr && !pwdErr ? (
            <Alert>
              <p>⚠️</p> Please check your email
            </Alert>
          ) : null}

          {pwdErr && !emailErr ? (
            <Alert>
              <p>⚠️</p> Please check your password
            </Alert>
          ) : null}

          {pwdErr && emailErr ? (
            <Alert>
              <p>⚠️</p> Please check both of your inputs
            </Alert>
          ) : null}
        </LoginBox>
        <CreateAccount>
          Don&lsquo;t have an account ?<Link to="/signup">Sign Up</Link>
        </CreateAccount>
      </Container>
    </>
  );
}

export default Login;
