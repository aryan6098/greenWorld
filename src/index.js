import React from "react";
import ReactDOM from "react-dom";
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
import "rsuite/dist/rsuite.min.css";
import "./styles.css";
import Navbar from "./MainComponents/Navbar";
import App from "./MainComponents/App";
class GreenWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Sample",
      population: 0,
      gdp: 0,
      area: 0,
    };
  }

  getCO2 = (event) => {
    let countyinfo = [
      {
        population: parseFloat(this.state.population),
        gdp: parseFloat(this.state.gdp),
        area: parseFloat(this.state.area),
      },
    ];

    const restEndpoint = "http://localhost:3000/computeco2";

    const callRestApi = async () => {
      const response = await fetch(restEndpoint, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(countyinfo),
      });
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      console.log("Inside Async");
      this.setState({
        message: "Carbon Emission for given region is " + jsonResponse,
      });
    };
    callRestApi();
  };

  App() {}
  onChange = (e) => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      population,
      gdp,
      area,
      message,
      planpopulation,
      plangdp,
      planarea,
    } = this.state;
    //const [value, setValue] = React.useState(0);
    return (
      <div className="App">
        <Navbar />
        <br />
        <br />
        <p>County Planner Tool.</p>

        <hr />

        <Form layout="inline">
          <h4>Please provide county details...</h4>
          <br></br>
          <p>
            <label>
              Population :{" "}
              <input
                type="text"
                name="population"
                value={population}
                onChange={this.onChange}
              ></input>
            </label>
          </p>
          <p>
            <label>
              GDP :{" "}
              <input
                type="text"
                name="gdp"
                value={gdp}
                onChange={this.onChange}
              ></input>
            </label>
          </p>
          <p>
            <label>
              Area :{" "}
              <input
                type="text"
                name="area"
                value={area}
                onChange={this.onChange}
              ></input>
            </label>
          </p>
          <button onClick={this.getCO2}>CO2Emissions</button>
          <br />
          <p>{this.state.message}</p>
        </Form>
        <br />
        <br />
        <h4>Planning Tool:</h4>
        <br></br>
        <Form layout="horizontal">
          <Form.Group controlId="planpopulation">
            <Form.ControlLabel>PlanPopulation</Form.ControlLabel>

            <Slider
              name="planpopulation"
              defaultValue={1000000}
              max={2000000000}
              min={10000}
              step={100000}
              value={planpopulation}
              onChange={(nextValue) => {
                this.state.population = { planpopulation };
              }}
            />
          </Form.Group>

          <Form.Group controlId="plangdp">
            <Form.ControlLabel>GDP</Form.ControlLabel>
            <Slider
              name="plangdp"
              max={1000000000}
              min={10000}
              step={1000000}
              value={plangdp}
              onChange={(nextValue) => {
                this.state.population = { plangdp };
              }}
            />
          </Form.Group>

          <Form.Group controlId="planarea">
            <Form.ControlLabel>Area</Form.ControlLabel>
            <Slider
              name="planarea"
              max={10000000000}
              min={100}
              step={100}
              value={planarea}
              onChange={(nextValue) => {
                this.state.population = { planarea };
              }}
            />
          </Form.Group>

          <ButtonToolbar>
            <Button onClick={this.getCO2}>Compute CO2</Button>
          </ButtonToolbar>
          <br />
          <p>{this.state.message}</p>
        </Form>
      </div>
    );
  }
}
// const element = <GreenWorld></GreenWorld>
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

ReactDOM.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
  ,document.getElementById("root")
);
