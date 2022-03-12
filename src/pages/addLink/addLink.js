import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  margin: auto;
  padding: 40px 0px;
`;

const Input = styled.input`
  height: 25px;
  border-color: ;
`;

const Button = styled.span`
  float: left;
  width: 80px;
  padding: 7px 20px;
  text-align: center;
  font-weight: 600;
  border-radius: 25px;
  background-color: #222;
  color: #eee;
  margin: 20px 0px 20px auto;
  cursor: pointer;
`;

const AddLink = () => {
  return (
    <Container>
      <small className="clickable" style={{ fontWeight: 700 }}>
        <i className="fa-solid fa-arrow-left-long"></i> Return to List
      </small>
      <h1>Add New Link</h1>
      <label>Link Name:</label>
      <Input />
      <label style={{ marginTop: 15 }}>Link URL:</label>
      <Input />
      <Button> ADD </Button>
    </Container>
  );
};

export default AddLink;
