import styled from 'styled-components';

const Member = ({ img, name, githubId }) => {
  return (
    <>
      <Container>
        <Img src={img} alt="img" />

        <Intro>
          <div>{name}</div>
          <div>githun ID : {githubId}</div>
        </Intro>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
`;

const Img = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 100%;
`;

const Intro = styled.div`
  border: 1px solid blue;
  margin-left: 10px;

  > div {
    margin-bottom: 5px;
  }
`;

export default Member;
