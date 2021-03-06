import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Alert from "../../components/Alert";
import Layout from "../../layouts/layout";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as linkActions from "../../redux/actions/linkActions";

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

const AddLink = (props) => {
  const [linkName, setlinkName] = useState("");
  const [linkUrl, setlinkUrl] = useState("");
  const [alert, setAlert] = useState({});
  const [visible, setVisible] = useState(false);

  let navigate = useNavigate();

  const handleSaveLink = () => {
    if (!linkName || !linkUrl) {
      setAlert({
        message: "Alanlar boş bırakılamaz lütfen kontrol ediniz.",
        type: "error",
      });
      setVisible(true);
    } else {
      props.actions.linkCreate({
        linkName,
        linkUrl,
        points: 0,
      });

      setAlert({
        message: " added",
        boldText: linkName,
        type: "success",
      });
      setVisible(true);
      setlinkName("");
      setlinkUrl("");
    }
  };

  return (
    <Layout>
      <Container>
        <small
          className="clickable"
          style={{ fontWeight: 700 }}
          onClick={() => navigate(-1)}
        >
          <i className="fa-solid fa-arrow-left-long"></i> Return to List
        </small>
        <h1>Add New Link</h1>
        <label>Link Name:</label>
        <Input value={linkName} onChange={(e) => setlinkName(e.target.value)} />
        <label style={{ marginTop: 15 }}>Link URL:</label>
        <Input value={linkUrl} onChange={(e) => setlinkUrl(e.target.value)} />
        <Button onClick={() => handleSaveLink()}> ADD </Button>
      </Container>
      <Alert {...alert} visible={visible} setVisible={setVisible} />
    </Layout>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      linkCreate: bindActionCreators(linkActions.linkCreate, dispatch),
    },
  };
};

export default connect(null, mapDispatchToProps)(AddLink);
