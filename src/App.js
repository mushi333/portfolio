import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import MainNavbar from "./component/navbar/MainNavbar.js";
import MainBody from "./component/body/MainBody.js";
import MainFooter  from './component/footer/MainFooter';

function App() {
  return (
    <Container className="Main">
      <MainNavbar />
      <MainBody />
      <MainFooter />
    </Container>
  );
}

export default App;
