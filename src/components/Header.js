import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 100px 10px 100px;
  padding-bottom: 10px;

  font-size: 50px;
  font-weight: 700;

  border-bottom: 2px solid rgb(212, 211, 211);
`;

const Header = () => {
  return (
    <Container>
      <div>
        <span style={{ color: "#ff6000" }}>hepsiburada</span>
        <span style={{ color: "#747474" }}>.com</span>
      </div>
      <div>
        Link<span style={{ fontWeight: 200 }}>VOTE</span>{" "}
        <span style={{ fontWeight: 400 }}>Challenge</span>
      </div>
    </Container>
  );
};

export default Header;
