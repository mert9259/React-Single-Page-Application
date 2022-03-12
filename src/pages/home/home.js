import React from "react";
import styled from "styled-components";
import LinkContainer from "../../components/LinkContainer";
import Alert from "../../components/Alert";
import Modal from "../../components/Modal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddContiner = styled.div`
  width: 400px;

  margin: 20px 0px;
  padding: 20px 10px;
  border-bottom: 3px solid #e7e7e7;
`;

const LinkListContiner = styled.div`
  padding: 10px 20px;
`;

const Select = styled.select`
  width: 200px;
  height: 35px;
  border-radius: 6px;
  padding: 8px;
  font-size: 14px;
  background-color: #f7f7f7;
`;

const PaginationContainer = styled.div``;

const PaginationNumberContiner = styled.h1`
  text-align: center;
`;

const Home = () => {
  const array = [
    {
      id: 1,
      linkName: "Hacker News",
      linkUrl: "https://news.ycombinator.com/",
      points: 5,
    },
    {
      id: 2,
      linkName: "Product Hunt",
      linkUrl: "https://producthunt.com/",
      points: 10,
    },
    {
      id: 3,
      linkName: "REDDIT",
      linkUrl: "https://www.reddit.com/",
      points: 15,
    },
    {
      id: 4,
      linkName: "Google",
      linkUrl: "https://www.google.com.tr/",
      points: 50,
    },
    {
      id: 5,
      linkName: "Hepsiburada.com",
      linkUrl: "https://www.hepsiburada.com/",
      points: 3,
    },
  ];

  return (
    <Container>
      <AddContiner onClick={() => alert("deneme")}>
        <LinkContainer link={{ isLink: true }} />
      </AddContiner>
      <LinkListContiner>
        <Select defaultValue={"default"}>
          <option value="default" disabled hidden>
            Order by
          </option>
          <option value="most">Most Voted (Z &#8594; A)</option>
          <option value="lest">Less Voted (A &#8594; Z)</option>
        </Select>
        <PaginationContainer>
          {array.map((item) => (
            <LinkContainer link={item} key={item.id} />
          ))}
        </PaginationContainer>
        <PaginationNumberContiner>
          <span className="clickable" style={{ margin: "auto 40px" }}>
            {"<"}{" "}
          </span>
          {"1 2 3 4 5"}
          <span className="clickable" style={{ margin: "auto 40px" }}>
            {">"}
          </span>
        </PaginationNumberContiner>
      </LinkListContiner>
      {/* <Modal /> */}
      {/* <Alert
        message={"Gelmeseydimde ne olacaktı."}
        type={"success"}
        boldText="deneme"
      /> */}
    </Container>
  );
};

export default Home;
