import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, CardActionArea } from "@mui/material";
import "./taboptionsGloble.css";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ReactTimeAgo from "react-time-ago";

function Portfolio({ item, data }) {
  const [read, setRead] = useState(false);
  if (!data) return "Loading";
  return (
    <div className="card">
      <Card key={item.id} sx={{ minWidth: 345, maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={item.images.map((img) => `${img.image}`)}
            alt="green iguana"
          />
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
            <Typography variant="body2" color="text.secondary">
              <div className="dates">
                <div className="start">
                  <div className="lable">Started on:</div>
                  <div className="preference">{item.started_time}</div>
                </div>
                <div className="end">
                  <div className="lable">Ended on:</div>
                  <div className="preference">{item.ended_time}</div>
                </div>
              </div>
              <div className={read ? "visible" : "hide"}>
                {item.description}
              </div>
            </Typography>
            <span onClick={() => setRead(!read)} className="show-hide">
              {read ? "Hide Details" : "Show Details"}
            </span>
            <div className="ago">
              <ReactTimeAgo date={item.created_at} locale="en-US" />
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Portfolio;
