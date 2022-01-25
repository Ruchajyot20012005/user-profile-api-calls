import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import "./Profile.css";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import TabsSection from "./TabsSection";
import Event from "./Event";
import { Globle } from "../App";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const { data } = useContext(Globle);
  const [follow, setFollow] = useState(false);
  console.log(data);

  if (!data) return "Loading";
  return (
    <div>
      <div className="main">
        <div className="profileImg">
          <div className="img">
            <Avatar
              alt="Chirag Balani"
              src={data ? data.basic.image_hd : ""}
              sx={{
                height: 100,
                width: 100,
                border: 2,
                borderColor: "error.main",
              }}
            />
          </div>
          <div className="follow">
            <span>{`${data.basic.followings} Followers`} </span>
            <span className="icon">
              <PersonAddAltOutlinedIcon
                sx={{ fontSize: "medium" }}
                onClick={() => setFollow(!follow)}
              />
            </span>
            <span className="icon">
              <SendOutlinedIcon sx={{ fontSize: "medium" }} />
            </span>
          </div>
          <div className="hashtags">
            {data.professions.map((item) => `#${item.title}`)}
          </div>
          <div className="attherate">{`@${data.basic.username}`}</div>
        </div>
        <div className="profileinfo">
          <div className="userName">
            <h1>{data.basic.name}</h1>
            <div className="location">
              <span>
                <LocationOnOutlinedIcon sx={{ fontSize: "medium" }} />
              </span>

              <small>{data.locations.map((item) => `${item.city}`)}</small>
            </div>
          </div>
          <div className="quickbooks">
            <span>0 Quickbooks</span>
            <span>
              <Button variant="contained" color="error" sx={{ marginLeft: 10 }}>
                See Quickbook
              </Button>
            </span>
          </div>
          <div className="knowmore">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Know more</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="joined">
                  <span>
                    <CalendarTodayOutlinedIcon
                      sx={{ marginRight: 2, fontSize: "medium" }}
                    />
                  </span>
                  <span> {`joind: ${data.basic.created_at}`}</span>
                </div>
                <div className="dob">
                  <span>
                    <CakeOutlinedIcon
                      sx={{ marginRight: 2, fontSize: "medium" }}
                    />
                  </span>
                  <span>{data.basic.dob}</span>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="submain">
        <div className="tabs">
          <TabsSection data={data} />
        </div>
        <div className="events">
          <div>
            <h2>Events</h2>
          </div>
          <Event data={data} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
