import React from "react";
import styled from "styled-components";
import { Button, ButtonToolbar } from "react-bootstrap";

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const WeatherButton = ({ cities, setCity, handleCityChange }) => {
  return (
    <ButtonGroup>
      <Button onClick={() => setCity("")}>Current Location</Button>
      {cities.map((it, index) => (
        <Button
          variant="light"
          key={index}
          onClick={() => handleCityChange(it)}
        >
          {it}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default WeatherButton;
