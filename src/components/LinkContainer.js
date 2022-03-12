import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 380px; 
  flex-direction: row;
  padding: 0px 10px;
  border-radius: 10px;

  ${(props) =>
    !props.isAddLink
      ? ""
      : `background-color: #f3f3f3;
   border: 2px solid #ebebeb;
   padding: 10px 8px;
  `}
`;

const PointsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;

  margin: ${(props) => (!props.isAddLink ? "20px" : "0px")} 0px;
  border: 1px solid #555;
  border-radius: 8px;
  background-color: #ebebeb;
`;

const DeleteIcon = styled.div`
  position: relative;
  color: #e95454;
  font-size: 30px;
  right: -20px;
  top: -12px;
`;

const LinkContainer = ({ link }) => {
  const [selected, setSelected] = useState(false);

  const voteButtonStyle = {
    color: "#adadad",
    fontWeight: 700,
    marginLeft: 10,
  };

  return !link.isLink ? (
    <Container
      className="clickable"
      style={{ backgroundColor: selected ? "#f1f1f1" : "white" }}
      onMouseEnter={() => setSelected(true)}
      onMouseLeave={() => setSelected(false)}
    >
      <PointsContainer>
        <h1 style={{ margin: 0 }}>{link.points}</h1>
        POINTS
      </PointsContainer>
      <div>
        <h2 style={{ margin: "20px 0px 0px 10px" }}>{link.linkName}</h2>
        <h4
          style={{
            margin: "0px 0px 23px 10px",
            color: "#bfbfbf",
            fontWeight: 400,
          }}
        >
          ({link.linkUrl})
        </h4>
        <span
          className="clickable"
          style={{ ...voteButtonStyle, marginRight: 50 }}
        >
          <i className="fa-solid fa-arrow-up"></i> Up Vote
        </span>
        <span className="clickable" style={voteButtonStyle}>
          <i className="fa-solid fa-arrow-down"></i> Down Vote
        </span>
      </div>
      {selected && (
        <DeleteIcon>
          <i className="fa-solid fa-circle-minus"></i>
        </DeleteIcon>
      )}
    </Container>
  ) : (
    <Container isAddLink={true} className="clickable">
      <PointsContainer isAddLink={true}>
        <i className="fa-solid fa-plus" style={{ fontSize: 50 }}></i>
      </PointsContainer>
      <h1 style={{ margin: "auto" }}>{"SUBMIT A LINK"}</h1>
    </Container>
  );
};

export default LinkContainer;
