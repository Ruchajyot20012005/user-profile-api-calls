import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Avatar, CardActionArea } from "@mui/material";
import "./taboptionsGloble.css";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ReactTimeAgo from "react-time-ago";

function Operating({ data, item }) {
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
            <div className="about-operating">
              <div className="location-icon">
                <LocationOnOutlinedIcon />
              </div>
              <div className="about-location">
                {`Now available for work in ${item.city}, ${item.zip_code}, ${item.state}, ${item.country}`}
              </div>
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

export default Operating;
