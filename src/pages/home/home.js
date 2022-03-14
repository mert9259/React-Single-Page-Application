import React from "react";
import styled from "styled-components";
import LinkContainer from "../../components/LinkContainer";
import Layout from "../../layouts/layout";
import { useNavigate } from "react-router-dom";
import Pagination from "./components/Pagination";

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

const Home = () => {
  let navigate = useNavigate();

  return (
    <Layout>
      <Container>
        <AddContiner onClick={() => navigate("addLink")}>
          <LinkContainer link={{ isLink: true }} />
        </AddContiner>
        <LinkListContiner>
          <Pagination />
        </LinkListContiner>
      </Container>
    </Layout>
  );
};

export default Home;
