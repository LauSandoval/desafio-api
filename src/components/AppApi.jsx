import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../Header.css'


function AppApi() {
  return (
    <Container>
      <Navbar  bg="dark" variant="dark">
        <Container>
          <Navbar.Brand style={{color:"white"}} href="#">Trending Movie</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  
  );
}

export default AppApi;