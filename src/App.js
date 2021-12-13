import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Navigation from './components/Navigation';
import WritePage from './pages/WritePage';
import ListPage from './pages/ListPage';

function App() {
  return (
    <div>
      <Navigation />
      <Route path="/" exact={true} component={ListPage} />
      <Route path="/write" exact={true} component={WritePage} />
    </div>
  );
}

export default App;
