import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const searchByName = (e) => {
    e.preventDefault();
    console.log("hi");
    dispatch({
      type: "SEARCH",
      payload: {
        keyword,

        // keyword: keyword,
      },
    });
  };
  return (
    <Form onSubmit={searchByName}>
      <Row>
        <Col lg={11}>
          <Form.Control
            type="text"
            placeholder="SearchName"
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Col>
        <Col lg={1}>
          <Button type="submit">Search</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBar;
