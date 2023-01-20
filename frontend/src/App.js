import CurrentUserProvider from './contexts/CurrentUser';
import './App.css';
import TopBar from './components/navbar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../src/pages/home/Home';
import Register from './pages/register/Register';
import LogIn from './pages/login/LogIn'
import SingleArticle from './pages/articles/SingleArticle'
import AddArticle from './pages/articles/AddArticle'
import EditArticle from './components/editarticle/EditArticle';


function App(post) {
  return (
    <CurrentUserProvider>
      <TopBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<SingleArticle />} />
          <Route path="/addarticle" element={<AddArticle />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/article/:id/edit" element={<EditArticle />} />
        </Routes>
      </Router>

      <footer className="footer">
        <h4>
          Site created by: <br />
          Bolatito Ayanbajo -2023 <a href="https://github.com/Ayanbajo">
            GitHub
          </a>{" "}
          <br />
          Shetara Smith -2023 <a href="https://github.com/shetara2022">
            GitHub
          </a>{" "}
          <br />
        </h4>
      </footer>
    </CurrentUserProvider>
  );
}

export default App;
