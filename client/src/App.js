import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/Home';
import Questions from './pages/questions';
import Question from './pages/question';
import QuestionInput from './pages/questionInput';
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import Login from './pages/login';
import SignUp from './pages/signup';
import Users from './pages/users';
import User from './pages/user';

const GlobalStyle = createGlobalStyle`
${reset}
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: #000;
  }
`;

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/questions/:id" element={<Question />} />
          <Route path="/questions/ask" element={<QuestionInput />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
