import './App.css';
import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
function App() {
  return (
    <div>
      <LoginPage></LoginPage>
    </div>
  );
}

export default App;
