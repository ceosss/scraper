import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import urlMetadata from "url-metadata";
import { JsonToTable } from "react-json-to-table";
import { message } from "antd";
import CircularProgress from "@material-ui/core/CircularProgress";

import "./Input.css";

const Input = () => {
  const [website, setWebsite] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  function onSubmit(e) {
    e.preventDefault();
    var res = website.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    if (!res) return message.error("Invalid URL");
    fetchData();
  }
  const fetchData = () => {
    setLoading(true);
    urlMetadata("https://cors-anywhere.herokuapp.com/" + website).then(
      (metadata) => {
        metadata.url = website;
        setData(metadata);
        setLoading(false);
      },
      (error) => {
        message.error(error);
        setLoading(false);
      }
    );
  };

  return (
    <div className="input">
      <form>
        <TextField
          id="outlined-basic"
          label="Website Link *"
          variant="outlined"
          onChange={(e) => setWebsite(e.target.value)}
        />
        <input type="submit" value="Extract" onClick={onSubmit} />
      </form>

      {loading ? (
        <div className="table">
          <CircularProgress />
        </div>
      ) : (
        <div className="table">
          <JsonToTable json={data} />
        </div>
      )}
    </div>
  );
};

export default Input;
