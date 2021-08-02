import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import MainNavbar from "./component/navbar/MainNavbar.js";
import MainFooter  from './component/footer/MainFooter';

function App() {
  return (
    <Container className="Main">
      <MainNavbar />
      <MainFooter />
    </Container>
  );
}

export default App;
