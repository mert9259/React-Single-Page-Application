import React from "react";
import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  z-index: 100;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: #aaac;
`;

const Container = styled.div`
  min-height: 190px;
  min-width: 425px;
  background-color: #cecece;
  box-shadow: 0px 3px 20px 3px #959595;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 10px;
  background-color: #222;
  color: #eee;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.span`
  float: left;
  width: 55px;
  padding: 7px 30px;
  text-align: center;
  font-weight: 600;
  border-radius: 25px;
  background-color: #222;
  color: #eee;
  margin: 20px;
  cursor: pointer;
`;

const Modal = ({ message, linkName, visible, onOk, onCancel }) => {
  if (!visible) return null;

  return (
    <Background>
      <Container>
        <Header>
          Remove Link{" "}
          <i
            className="fa-solid fa-xmark clickable"
            style={{ fontSize: 23 }}
            onClick={()=>onCancel()}
          ></i>
        </Header>
        <Content>
          <div style={{ marginTop: 25, fontWeight: 500, color: "grey" }}>
            {message}
          </div>
          <b style={{ fontSize: 25, marginBottom: 25 }}>{linkName}</b>
          <div>
            <Button
              onClick={() => {
                onOk();
                onCancel();
              }}
            >
              OK
            </Button>
            <Button onClick={() => onCancel(false)}>CANCEL</Button>
          </div>
        </Content>
      </Container>
    </Background>
  );
};

export default Modal;
