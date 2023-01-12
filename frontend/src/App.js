
import './App.css';
import TopBar from './components/navbar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../src/pages/home/Home';
// import Header from './components/header/Header';
// import ArticleCards from './components/articlecards/ArticleCards';

function App() {
  return (
    <>
      <TopBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/articles" element={<TravelArticles />} /> */}
          {/* <Route path="/details" element={<Details/>} /> */}
          {/* <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} /> */}
        </Routes>
      </Router>
    </>

  )
}

export default App;
