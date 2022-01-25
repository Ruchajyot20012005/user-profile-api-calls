import "./App.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppBar } from "@mui/material";
import logo from "./assets/logo.svg";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

export const Globle = createContext();

function App() {
  const [data, setData] = useState();
  const [search, setSearch] = useState();

  function getSearch(e) {
    const result = e;
    setSearch(result);
  }

  useEffect(() => {
    if (search) {
      axios
        .get(`https://py.crewbella.com/user/api/profile/${search}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
      setSearch("");
    }
    console.log(data);
  }, [search, data]);

  return (
    <Globle.Provider value={{ getSearch: getSearch, data: data }}>
      <Router>
        <div className="app">
          <AppBar className="nav" position="static" sx={{ py: 2, px: 10 }}>
            <img src={logo} alt="logo" style={{ height: 50, width: 150 }} />
          </AppBar>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/chiragbalani" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </Globle.Provider>
  );
}

export default App;
