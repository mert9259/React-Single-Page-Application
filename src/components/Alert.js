import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0px;
  display: flex;
  flex-direction: row;
  top: 10px;
  margin: 50px auto;
  padding: 15px 75px;
  min-width: 200px;
  text-align: center;

  background-color: #cbffc4;
  color: #79bf5c;
  border: 1px solid #3a7431;
  border-radius: 7px;
  box-shadow: 0px 1px 10px 0px #8c918c;
`;

const AlertText = styled.div`
  font-size: 22px;
  font-weight: 600;
`;

const Alert = ({ message, type, boldText }) => {
  const colorBackgroundColor = {
    success: "#cbffc4",
    error: "#ffc4c4",
  };
  const colorBorder = {
    success: "#3a7431",
    error: "#cf4646",
  };
  const color = {
    success: "#79bf5c",
    error: "#bf5c5c",
  };

  return (
    <Container
      style={{
        backgroundColor: colorBackgroundColor[type],
        color: color[type],
        borderColor: colorBorder[type],
      }}
    >
      <AlertText>
        {boldText && <b style={{ fontWeight: 800 }}>{boldText}</b>} {message}
      </AlertText>
    </Container>
  );
};

export default Alert;
