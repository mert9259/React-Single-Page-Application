import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Alert from "../../components/Alert";
import Layout from "../../layouts/layout";
import LinkService from "../../services/linkServices";

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
  const [linkName, setlinkName] = useState("");
  const [linkUrl, setlinkUrl] = useState("");
  const [alert, setAlert] = useState({});

  let history = useHistory();

  const handleSaveLink = () => {
    if (!linkName || !linkUrl)
      setAlert({
        message: "Alanlar boş bırakılamaz lütfen kontrol ediniz.",
        type: "error",
        setAlert,
      });
    else {
      const linkArray = [...LinkService.load()];
      linkArray.push({
        linkName,
        linkUrl,
        points: 0,
      });
      if (LinkService.save(linkArray))
        setAlert({
          message: " added",
          boldText: linkName,
          type: "success",
          setAlert,
        });
    }
  };

  return (
    <Layout>
      <Container>
        <small
          className="clickable"
          style={{ fontWeight: 700 }}
          onClick={() => history.goBack()}
        >
          <i className="fa-solid fa-arrow-left-long"></i> Return to List
        </small>
        <h1>Add New Link</h1>
        <label>Link Name:</label>
        <Input onChange={(e) => setlinkName(e.target.value)} />
        <label style={{ marginTop: 15 }}>Link URL:</label>
        <Input onChange={(e) => setlinkUrl(e.target.value)} />
        <Button onClick={() => handleSaveLink()}> ADD </Button>
      </Container>
      <Alert {...alert} />
    </Layout>
  );
};

export default AddLink;
