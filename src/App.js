import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import "antd/dist/antd.css";
import Header from "./component/Header";
import { Home, About, Member, Archive } from "pages";
// #FFDF44

const App = () => {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/member" component={Member} />
      <Route exact path="/archive" component={Archive} />
    </div>
  );
};

export default App;
