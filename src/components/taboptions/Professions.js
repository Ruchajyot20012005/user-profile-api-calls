import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Avatar, CardActionArea } from "@mui/material";
import "./taboptionsGloble.css";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ReactTimeAgo from "react-time-ago";

function Professions({ data, item }) {
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
              <h1>{item.for_quickbook ? "Quickbook" : "Profession"}</h1>
            </div>
            <div>
              <div className="profession-info">
                <div className="lable">Role:</div>
                <div className="preference">{item.title}</div>
              </div>
              {item.for_quickbook ? (
                <div className="profession-info">
                  <div className="lable">Rate:</div>
                  <div className="preference">
                    {`${item.quickbook_details.rate_currency} ${item.quickbook_details.rate_amount} / ${item.quickbook_details.rate_duration}`}
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="profession-info">
                <div className="lable">Experience:</div>
                <div className="preference">{`${item.experience} years`}</div>
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

export default Professions;
