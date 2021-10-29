import React from "react";
import {
  RangeSlider,
  Slider,
  Form,
  ButtonToolbar,
  Button,
  setFormValue,
  Nav,
  Row,
  Col,
  InputNumber,
} from "rsuite";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="App">
      <Nav>
          {/* <Link to="/">Home</Link>
          <Link to="index_single_working">KnowYourCO2</Link> */}
        <Nav.Item href="/">Home</Nav.Item>
        <Nav.Item href="/index_single_working">KnowYourCO2</Nav.Item>
        <Nav.Item href="/plannig_doc">Planner Tools</Nav.Item>
        <Nav.Item href="/map">Map</Nav.Item>
        <Nav.Item href="/">About</Nav.Item>
      </Nav>
    </div>
  );
}
