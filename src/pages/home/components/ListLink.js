import React from "react";
import LinkContainer from "../../../components/LinkContainer";

const ListLink = ({ onePageLinkArray }) => {
  return (
    <div>
      {onePageLinkArray.length > 0 ? (
        onePageLinkArray.map((item, index) => (
          <LinkContainer link={{ ...item, index }} key={index} />
        ))
      ) : (
        <h1 style={{ textAlign: "center" }}>Empty</h1>
      )}
    </div>
  );
};

export default ListLink;
