import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//pages
import Home from "../home/home";
import AddLink from "../addLink/addLink";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/addlink" exact component={AddLink} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
