import React,{useEffect,useState} from "react";
import { Grid, Row, Col, Form, Button } from "rsuite";
const restEndpoint = "http://localhost:3000/computeco2";
export default function CoEmission() {
    const [message,setMessage]= useState("Sample")
    const [population,setPopulation] = useState(0)
    const [gdp,setGdp] = useState(0);
    const [area,setArea] = useState(0);
    const [value,setValue] =useState({
        population:"",
        gdp:"",
        area:""
    })
    useEffect(()=>{
        // getCo2() 
    })
    const getCo2 = ()=>{
        let countyinfo = [
            {
              population: parseFloat(population),
              gdp: parseFloat(gdp),
              area: parseFloat(area),
            },
          ];
    
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
        setMessage("Carbon Emission for given region is " + jsonResponse,);
      };
      callRestApi();
    };

    const handleInput =(e)=>{
        const { name, value } = e.target;
        console.log(e)
        // setValue((preValue) => {
        //   return {
        //     ...preValue,
        //     [name]: value,
        //   };
        // });
    }
  return (
    <Grid fluid>
      <Row className="show-grid">
        <Form layout="horizontal">
          <Form.Group controlId="population">
            <Form.ControlLabel>Population</Form.ControlLabel>
            <Form.Control
              type="text"
              placeholder="Username"
              name="population"
              onChange={handleInput}
              value={value.population}
            />
          </Form.Group>

          <Form.Group controlId="gdp">
            <Form.ControlLabel> GDP </Form.ControlLabel>
            <Form.Control placeholder="GDP"  onChange={handleInput} name="gdp" type="text" value={value.gdp} />
          </Form.Group>
          <Form.Group controlId="area">
            <Form.ControlLabel> Area </Form.ControlLabel>
            <Form.Control placeholder="Area"  onChange={handleInput} name="area" type="text" value={value.area} />
          </Form.Group>
          {/* <Form.Group controlId="gdp">
          <Form.ControlLabel> <Button>CO2Emissions</Button> </Form.ControlLabel>
          </Form.Group> */}
          <Form.Group>
          <Form.ControlLabel>  <Button>CO2Emissions</Button> </Form.ControlLabel>
           <Form.ControlLabel></Form.ControlLabel>
            </Form.Group>
            
        </Form>

       

      </Row>
    </Grid>
  );
}
