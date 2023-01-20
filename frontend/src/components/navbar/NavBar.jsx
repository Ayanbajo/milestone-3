import './/navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useContext } from 'react';
import { CurrentUser } from '../../contexts/CurrentUser';


function TopBar() {
  const { currentUser, setCurrentUser } = useContext(CurrentUser)
  

  const LogOut = () => {
    localStorage.removeItem('token')
    setCurrentUser(null)
    window.location.reload()
  }

  const showLogIn =  currentUser ?
      <>
      <Nav.Link href="/addarticle">Add New Article</Nav.Link>  
      <button className="log_out" type='button' onClick={LogOut}>Log Out</button>
      <span className='user_name'> {currentUser.first_name} </span>
      </>
      :
      <>
        <NavDropdown title="Login" id="basic-nav-dropdown">
          <NavDropdown.Item href="/login">Login</NavDropdown.Item>
        <NavDropdown.Item href="/signup">
        SignUp
      </NavDropdown.Item>

    </NavDropdown>
      </>
  
  return (
    <Navbar bg="myColor" expand="lg">
      <Container>
              <Navbar.Brand href="/">Travel & Share Blog</Navbar.Brand>
          <Nav className="links">
            <Nav.Link href="/">Home</Nav.Link>
          
            {showLogIn}
          </Nav>
      </Container>
    </Navbar>
  );
}

export default TopBar;