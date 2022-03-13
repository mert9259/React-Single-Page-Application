import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ListLink from "./ListLink";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as linkActions from "../../../redux/actions/linkActions";

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

const Pagination = (props) => {
  const [onePageLinkArray, setOnePageLinkArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSort, setSelectedSort] = useState(null);
  const [voteChange, setVoteChange] = useState(false);

  const pageNumber =
    props.linkList.length % 5 == 0
      ? Math.floor(props.linkList.length / 5)
      : Math.floor(props.linkList.length / 5) + 1;
  const pageNumberArray = [
    currentPage - 2,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    currentPage + 2,
  ].filter((number) => number <= pageNumber && number > 0);

  useEffect(() => {
    linksShownInPageChange();
  }, [currentPage, props.linkList]);

  const linksShownInPageChange = () => {
    setOnePageLinkArray(
      props.linkList.length > 0
        ? props.linkList.filter(
            (item, index) =>
              currentPage * 5 > index && index >= (currentPage - 1) * 5
          )
        : []
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

  useEffect(() => {
    if (!!selectedSort) {
      props.actions.listSort(selectedSort);
    }
  }, [voteChange, selectedSort]);

  return (
    <>
      {pageNumberArray.length > 0 && (
        <Select
          defaultValue={"default"}
          onChange={(e) => setSelectedSort(e.target.value)}
        >
          <option value="default" disabled hidden>
            Order by
          </option>
          <option value="most">Most Voted (Z &#8594; A)</option>
          <option value="lest">Less Voted (A &#8594; Z)</option>
        </Select>
      )}
      <ListLink
        onePageLinkArray={onePageLinkArray}
        voteChange={voteChange}
        setVoteChange={setVoteChange}
      />
      {pageNumberArray.length > 0 && (
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
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    linkList: state.linkReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      listSort: bindActionCreators(linkActions.linkSort, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
