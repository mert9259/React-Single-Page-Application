import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ListLink from "./ListLink";

const Select = styled.select`
  width: 200px;
  height: 35px;
  border-radius: 6px;
  padding: 8px;
  font-size: 14px;
  background-color: #f7f7f7;
`;

const PaginationNumberContiner = styled.h1`
  text-align: center;
`;

const PageNumberContainer = styled.b`
  margin: 0px;
  padding: 0px 10px;
`;

const Pagination = ({ links }) => {

  const [onePageLinkArray, setOnePageLinkArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumber =
    links.length % 5 == 0
      ? Math.floor(links.length / 5)
      : Math.floor(links.length / 5) + 1;
  const pageNumberArray = [
    currentPage - 2,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    currentPage + 2,
  ].filter((number) => number <= pageNumber && number > 0);

  useEffect(() => {
    linksShownInPageChange();
  }, [currentPage,links]);

  const linksShownInPageChange = () => {
    setOnePageLinkArray(
      links.filter(
        (item, index) =>
          currentPage * 5 > index && index >= (currentPage - 1) * 5
      )
    );
  };

  const pageNumberDown = () => {
    setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
  };

  const pageNumberUp = () => {
    setCurrentPage(
      currentPage + 1 < pageNumber - 1 ? currentPage + 1 : pageNumber
    );
  };

  return (
    <>
      <Select defaultValue={"default"}>
        <option value="default" disabled hidden>
          Order by
        </option>
        <option value="most">Most Voted (Z &#8594; A)</option>
        <option value="lest">Less Voted (A &#8594; Z)</option>
      </Select>
      <ListLink onePageLinkArray={onePageLinkArray} />
      <PaginationNumberContiner>
        <span
          className="clickable"
          style={{ margin: "auto 40px" }}
          onClick={() => pageNumberDown()}
        >
          {"<"}{" "}
        </span>
        {pageNumberArray.map((item, index) => {
          return (
            <PageNumberContainer
              key={index}
              style={{
                border: item == currentPage ? "1px solid black" : "none",
              }}
            >
              {item}
            </PageNumberContainer>
          );
        })}
        <span
          className="clickable"
          style={{ margin: "auto 40px" }}
          onClick={() => pageNumberUp()}
        >
          {">"}
        </span>
      </PaginationNumberContiner>
    </>
  );
};

export default Pagination;
