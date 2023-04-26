import axios from 'axios';
import Container from '../components/Container';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UsersBlock = styled.main`
  width: calc(100% - 164px);
  padding: 50px;
  h1 {
    font-size: 2rem;
  }
`;

const UserList = styled.ol`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  li {
    flex-basis: calc(50% - 10px);
    padding: 30px;
    border-bottom: 1px solid #d9d9d9;
  }
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 1.5rem;
    margin-bottom: 5px;
  }
`;

const UserImg = styled.div`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  background: ${props => `url(${props.background}) no-repeat center`};
  background-size: 128px;
  margin-right: 15px;
`;

function Users() {
  // const [users, setUsers] = useState([]);
  const [members, setMembers] = useState([]);

  // const userData = 'http://localhost:3001/USER_DATA';

  useEffect(() => {
    axios
      .get('/members')
      .then(res => {
        setMembers(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  // useEffect(() => {
  //   axios.get(`${userData}`).then(res => setUsers(res.data));
  // }, []);

  return (
    <Container>
      <UsersBlock>
        <h1>Users</h1>
        <UserList>
          {members.map((user, idx) => {
            return (
              <li key={idx}>
                <Link to={`/users/${user.id}`}>
                  <UserImg background={user.img} />
                  <UserInfo>
                    <p>{user.displayName}</p>
                    <span>{user.email}</span>
                  </UserInfo>
                </Link>
              </li>
            );
          })}
        </UserList>
      </UsersBlock>
    </Container>
  );
}
export default Users;
