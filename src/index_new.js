import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import {  Form, Nav} from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "./styles.css";

class GreenWorld extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        message: 'Sample',
        population: 0,
        gdp: 0,
        area: 0
      };

    }
  
    
  getCO2 = (event) => {
      let countyinfo = [{
            "population" : parseFloat(this.state.population),
            "gdp":parseFloat(this.state.gdp),
            "area":parseFloat(this.state.area)
      
          }];
        
    
    const restEndpoint = "http://localhost:3000/computeco2";
    
    const callRestApi = async () => {
      const response = await fetch(restEndpoint,{
        method: 'POST',
        headers:{'Content-type':'application/json',
                 'Accept': 'application/json'
                },
        body: JSON.stringify(countyinfo)
        });
      const jsonResponse = await(response.json())
      console.log(jsonResponse);
      console.log("Inside Async")
      this.setState({message : 'Carbon Emission for given region is '+ jsonResponse})
    };
    callRestApi()
    }

 App() {
  
  }
  onChange = (e) => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */
    this.setState({ [e.target.name]: e.target.value });
  }

  
  render() {
    const { population, gdp, area } = this.state;


  return (
    <div className="App">
      <Nav>
        <Nav.Item href="/" >Home</Nav.Item>
        <Nav.Item href= "/index_single_working">KnowYourCO2</Nav.Item>
        <Nav.Item  href="/planner">Planner Tools</Nav.Item>
        <Nav.Item href="/map">Map</Nav.Item>
        <Nav.Item href="/">About</Nav.Item>
      </Nav>
      <br/><br/>
      <Form layout="inline">
        <h4>Please provide county details...</h4>
        <br></br>
        <p>
          <label>Population : <input type="text"  name="population" value={population} onChange={this.onChange} ></input></label>
        </p>
        <p>
          <label>GDP : <input type="text" name="gdp" value={gdp} onChange={this.onChange} ></input></label>
        </p>
        <p>
          <label>Area : <input type="text" name="area" value={area} onChange={this.onChange} ></input></label>
        </p>
        <button onClick={this.getCO2}>CO2Emissions</button>
        <br/>
        <p>{this.state.message}</p>
      </Form>
    </div>
  );
}
}
const element = <GreenWorld></GreenWorld>
ReactDOM.render(element,document.getElementById("root"));
