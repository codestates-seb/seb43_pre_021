import styled from 'styled-components';

const Member = ({ img, name, githubId, url }) => {
  const handleLink = url => {
    window.open(url);
  };
  return (
    <>
      <Container onClick={() => handleLink(url)}>
        <Img src={img} alt="img" />

        <Intro>
          <div>{name}</div>
          <button>{githubId}</button>
        </Intro>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  margin-top: 30px;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 100%;
`;

const Intro = styled.div`
  margin-left: 10px;

  > div {
    margin-bottom: 5px;
  }

  button {
    border: none;
    background-color: white;
    margin-left: -4px;
  }
`;

export default Member;
