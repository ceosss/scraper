import React from "react";
import Input from "./Components/Input/Input";
import { ReactComponent as Github } from "./github-logo.svg";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <div className="head">
        <h1>Scraper</h1>
      </div>
      <Input />
      <a href="https://github.com/ceosss/scraper" target="_blank">
        <Github className="github" />
      </a>
    </div>
  );
}

export default App;
