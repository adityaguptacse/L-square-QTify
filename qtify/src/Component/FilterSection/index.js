import Carousel from "../Carousel";
import "./filterSection.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

export default function FilterSection({ title, data, filters, executeFilter }) {

    const [selectedTab, setSelectedTab] = useState(0)
  return (
    <div className="section">
      <div>
        <h1 className="title">{title}</h1>
      </div>

      <Tabs 
      value={selectedTab}
      onChange={(e, value) =>{
        console.log("Value", value)
        executeFilter(filters[value].key)
        setSelectedTab(value)
      }}

      TabIndicatorProps={{
        style: {
            backgroundColor: 'var(--css-primary)'
        }
      }}
      >
        {filters.map(f => (
          <Tab  className="tab" lable={f.label} key={f.key} />
        ))}
      </Tabs>
      <Carousel data={data} navId='filter-genres'/>
    </div>
  );
}
