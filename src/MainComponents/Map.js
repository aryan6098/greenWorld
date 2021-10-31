import React, { useState } from "react";
import MapChart from "./MapChart";
import ReactTooltip from "react-tooltip";
export default function Map() {
  const [content, setContent] = useState("");
  return (
    <div style={{ width: "800px", height: "800px" }}>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}
