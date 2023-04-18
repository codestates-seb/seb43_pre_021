import { CgSearch } from 'react-icons/cg';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-shrink: 10000;
  flex-grow: 1;
  align-items: center;
  margin-left: 30px;
  margin-right: 20px;
`;
const FormBlock = styled.div`
  position: relative;
  flex-grow: 1;
  .searchIcon {
    position: absolute;
    left: 3px;
    top: 5px;
    color: #858c94;
  }
  input {
    padding: 7px;
    padding-left: 30px;
    font-size: 15px;
    width: 100%;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    transition: 0.2s;
    &:focus {
      border: 1px solid #4393f7;
      outline: 5px solid #e3ecf4;
    }
  }
`;

function Search() {
  return (
    <Form>
      <FormBlock>
        <CgSearch size="24" className="searchIcon" />
        <input type="text" placeholder="Search ..." />
      </FormBlock>
    </Form>
  );
}
export default Search;
