import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Avatar, CardActionArea } from "@mui/material";
import "./taboptionsGloble.css";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ReplyIcon from "@mui/icons-material/Reply";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import ReactTimeAgo from "react-time-ago";

function Positions({ data, item }) {
  const [read, setRead] = useState(false);
  if (!data) return "Loding...";
  return (
    <div className="card">
      <Card key={item.id} sx={{ minWidth: 345, maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <div className="accountDetails">
              <div className="profilepic">
                <Avatar
                  alt="Chirag Balani"
                  src={data.basic.image_hd}
                  sx={{
                    height: 30,
                    width: 30,
                  }}
                  className="profile-img"
                />
              </div>
              <div className="info">
                <div className="name">{data.basic.name}</div>
                <div className="attherate">{`@${data.basic.username}`}</div>
              </div>
              <div className="menu">
                <MoreVertOutlinedIcon />
              </div>
            </div>
            <div className="about-position">
              <div className="position-info">
                <div className="lable">Looking for:</div>
                <div className="preference">{item.profession}</div>
              </div>
              <div className="position-info">
                <div className="lable">Position:</div>
                <div
                  className={("preference", item.is_active ? "open" : "close")}
                >
                  {item.is_active ? "Open" : "Closed"}
                </div>
              </div>
              <div className="position-info">
                <div className="lable">Location:</div>
                <div className="preference">{item.location}</div>
              </div>
              <div className="position-info">
                <div className="lable">Experience:</div>
                <div className="preference">{`${item.experience} years`}</div>
              </div>
              <div className="position-info" style={{ minHeight: "100px" }}>
                <div className="lable">Skills:</div>
                <div className="preference">
                  {item.skills ? `${item.skills}` : "Not mentioned"}
                </div>
              </div>
            </div>
            <div className={read ? "visible" : "hide"}>
              <div className="position-info">
                <div className="lable">Description:</div>
                <div className="preference">{item.description}</div>
              </div>
              <div className="position-info">
                <div className="lable">Job Type:</div>
                <div className="preference">{item.job_type}</div>
              </div>
              <div className="position-info">
                <div className="lable">Openings:</div>
                <div className="preference">{item.openings}</div>
              </div>
              <div className="position-info">
                <div className="lable">Time period:</div>
                <div className="preference">
                  {item.time_period
                    ? `${item.time_period} Days`
                    : "Not mentioned"}
                </div>
              </div>
            </div>
            <div className="btns">
              <span className="btns-inner">
                <span>
                  <ReplyIcon />
                </span>
                <span>Apply</span>
              </span>
              <span className="btns-inner" onClick={() => setRead(!read)}>
                <span>
                  {read ? (
                    <ExpandLessOutlinedIcon />
                  ) : (
                    <ExpandMoreOutlinedIcon />
                  )}
                </span>
                <span>Details</span>
              </span>
              <span className="btns-inner">
                <span>
                  <LocalPostOfficeOutlinedIcon />
                </span>
                <span>Ping</span>
              </span>
            </div>
            <div className="ago">
              <ReactTimeAgo date={item.created_at} locale="en-US" />
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Positions;
