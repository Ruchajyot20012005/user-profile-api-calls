import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { Globle } from "../App";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [data, setData] = useState("");
  const { getSearch } = useContext(Globle);
  const navigate = useNavigate();

  const handleClick = () => {
    let final = data.toLowerCase();
    final = final.replace(/\s+/g, "");
    setData("");
    getSearch(final);
    navigate(`${final}`);
  };
  return (
    <div className="search-div">
      <div className="search-input">
        <TextField
          label=" Search by User name"
          id="fullWidth"
          sx={{ width: "100%" }}
          onChange={(e) => setData(e.target.value)}
        />
      </div>
      <div className="searchBtn">
        <Button variant="contained" color="error" onClick={handleClick}>
          Search
        </Button>
      </div>
    </div>
  );
}

export default Home;
