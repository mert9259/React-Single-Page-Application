import React from "react";
import LinkContainer from "../../../components/LinkContainer";

const ListLink = ({ onePageLinkArray }) => {



  return (
    <div>
      {onePageLinkArray ? (
        onePageLinkArray.map((item, index) => (
          <LinkContainer link={item} key={index} />
        ))
      ) : (
        <h1 style={{ textAlign: "center" }}>Empty</h1>
      )}
    </div>
  );
};

export default ListLink;
