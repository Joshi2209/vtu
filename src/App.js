import Footer from "./component/Footer";
import Header from "./component/Header";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>
      <Container>
        <main>
          <Outlet />
        </main>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
