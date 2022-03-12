import React, { useState } from "react";
import styled from "styled-components";
import LinkContainer from "../../components/LinkContainer";
import Layout from "../../layouts/layout";
import { useHistory } from "react-router-dom";
import LinkService from "../../services/linkServices";
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
  let history = useHistory();
  const [links, setLinks] = useState(LinkService.load());

  return (
    <Layout>
      <Container>
        <AddContiner onClick={() => history.push("addLink")}>
          <LinkContainer link={{ isLink: true }} />
        </AddContiner>
        <LinkListContiner>
          <Pagination links={links} setLinks={setLinks} />
        </LinkListContiner>
      </Container>
    </Layout>
  );
};

export default Home;
