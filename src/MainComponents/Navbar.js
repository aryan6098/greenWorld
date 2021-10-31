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
        <Nav.Item as={Link} to="/">
          Home
        </Nav.Item>
        <Nav.Item as={Link} to="/index_single_working">
          KnowYourCO2
        </Nav.Item>
        <Nav.Item as={Link} to="/plannig_doc">
          Planner Tools
        </Nav.Item>
        <Nav.Item as={Link} to="/map">
          Map
        </Nav.Item>
      </Nav>
    </div>
  );
}
