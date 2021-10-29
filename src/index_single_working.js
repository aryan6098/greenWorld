import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Link } from 'react-router-dom';
import App from './App';
//import reportWebVitals from './reportWebVitals';

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

class GreenWorld extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        message: 'Sample'
      };
    }
  

  getCO2=()=>{
    let countyinfo=[{
          "population" : parseFloat(this.refs.population.value),
          "gdp":parseFloat(this.refs.gdp.value),
          "area":parseFloat(this.refs.area.value)
    
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
      this.setState({message : 'Carbon Emission for given region is '+ jsonResponse})
    };
    callRestApi()
  }
  render(){
    return(
      <div>
        <h2>Please provide county details...</h2>
        <p>
          <label>Population : <input type="text"  ref="population"></input></label>
        </p>
        <p>
          <label>GDP : <input type="text" ref="gdp"></input></label>
        </p>
        <p>
          <label>Area : <input type="text" ref="area"></input></label>
        </p>
        <button onClick={this.getCO2}>CO2Emissions</button>
        <p>{this.state.message}</p>
      </div>

          )
    }
  }
  const element = <GreenWorld></GreenWorld>
  ReactDOM.render(element,document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
