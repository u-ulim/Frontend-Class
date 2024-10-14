import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px 0px;
`;

const Img = styled.img`
  width: 40px;
`;

const Name = styled.div``;

const Number = styled.div``;

const ContactItem = ({ item }) => {
  return (
    <Wrapper>
      <Row>
        <Col lg={1}>
          <Img
            src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"
            alt="user"
          />
        </Col>
        <Col lg={11}>
          <Name>{item.name}</Name>
          <Number>{item.phoneNumber}</Number>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default ContactItem;
