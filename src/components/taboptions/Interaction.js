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

function Interaction({ data, item }) {
  const [read, setRead] = useState(false);
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
            <div>
              <h1>Question</h1>
            </div>
            <div className="question">{`${item.title}?`}</div>
            <div className={read ? "visible" : "hide"}>
              <div className="ans">
                <div className="ans-Details">
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
                    <div className="attherate">{item.answer.description}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ago">
              <ReactTimeAgo date={item.created_at} locale="en-US" />
            </div>
            <div className="btns">
              <span className="btns-inner">
                <span>
                  <ReplyIcon />
                </span>
                <span>Reply</span>
              </span>
              <span className="btns-inner" onClick={() => setRead(!read)}>
                <span>
                  {read ? (
                    <ExpandLessOutlinedIcon />
                  ) : (
                    <ExpandMoreOutlinedIcon />
                  )}
                </span>
                <span>More</span>
              </span>
              <span className="btns-inner">
                <span>
                  <LocalPostOfficeOutlinedIcon />
                </span>
                <span>Ping</span>
              </span>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Interaction;
