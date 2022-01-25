import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Portfolio from "./taboptions/Portfolio";
import Positions from "./taboptions/Positions";
import Professions from "./taboptions/Professions";
import Operating from "./taboptions/Operating";
import Interaction from "./taboptions/Interaction";
import "./TabsSection.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsSection({ data }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Portfolio" {...a11yProps(0)} />
          <Tab label="client Postiongs" {...a11yProps(1)} />
          <Tab label="Professtions" {...a11yProps(2)} />
          <Tab label="Operating in" {...a11yProps(3)} />
          <Tab label="Interactions" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="section">
          {data.portfolio.map((item) => (
            <Portfolio key={item.id} data={data} item={item} />
          ))}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="section">
          {data.client_postings.map((item) => (
            <Positions key={item.id} data={data} item={item} />
          ))}
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="section">
          {data.professions.map((item) => (
            <Professions key={item.id} data={data} item={item} />
          ))}
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="section">
          {data.locations.map((item) => (
            <Operating key={item.id} data={data} item={item} />
          ))}
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div className="section">
          {data.questions.map((item) => (
            <Interaction key={item.id} data={data} item={item} />
          ))}
        </div>
      </TabPanel>
    </Box>
  );
}
