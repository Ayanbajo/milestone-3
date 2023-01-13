
import './App.css';
import TopBar from './components/navbar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../src/pages/home/Home';
import Register from './pages/register/Register';
import LogIn from './pages/login/LogIn'


function App() {
  return (
    <>
      <TopBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/articles" element={<TravelArticles />} /> */}
          {/* <Route path="/details" element={<Details />} /> */}
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </Router>

      {/* <footer className="footer">
        <h4>
          Site created by: <br />
          Shetara Smith -2022 <a href="https://github.com/shetara2022">
            GitHub
          </a>{" "}
          <br />
        </h4>
      </footer> */}
    </>
  );
}

export default App;
