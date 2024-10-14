import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 20px;
  margin-top: 100px;
`;

const Title = styled.h1`
  font-size: 22px;
`;

function App() {
  return (
    <Wrapper>
      <Title>Phone Book</Title>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default App;
