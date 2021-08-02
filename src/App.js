import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import MainNavbar from "./component/navbar/MainNavbar.js";

function App() {
  return (
    <Container className="Navigation">
      <MainNavbar />
    </Container>

  );
}

export default App;
