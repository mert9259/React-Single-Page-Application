import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  top: 0px;
  left: 0px;
  width: 100%;
`;

const AlertContainer = styled.div`
  margin: auto;
  margin-top: 50px;
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

const Alert = ({ message, type, boldText, visible, setVisible }) => {
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [message, type, boldText]);

  return (
    visible && (
      <Container>
        <AlertContainer
          style={{
            backgroundColor: colorBackgroundColor[type],
            color: color[type],
            borderColor: colorBorder[type],
          }}
        >
          <AlertText>
            {boldText && <b style={{ fontWeight: 800 }}>{boldText}</b>}{" "}
            {message}
          </AlertText>
        </AlertContainer>
      </Container>
    )
  );
};

export default Alert;
