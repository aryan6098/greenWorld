import React, { useState } from "react";
import {
  Grid,
  Divider,
  Row,
  Col,
  FlexboxGrid,
  Form,
  Button,
  Slider,
  InputNumber,
} from "rsuite";

const restEndpoint = "http://localhost:3000/computeco2";
export default function PlanningTools() {
  //   const [value, setValue] = React.useState(0);
  const [message, setMessage] = useState("Sample");
  const [population, setPopulation] = useState(10000);
  const [gdp, setGdp] = useState(10000);
  const [area, setArea] = useState(100);
  const styles = {
    Item: {
      display: "flex",
      justifyContent: "center",
    },
    Container: {
      marginLeft: "10px",
    },
    value: {
      display: "flex",
      justifyContent: "center",
      alignItem: "center",
      marginTop: "5px",
    },
    header: {
      marginLeft: "60px",
    },
  };
  const getCO2 = (event) => {
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
      this.setState({
        message: "Carbon Emission for given region is " + jsonResponse,
      });   
    };
    callRestApi();
  };
  return (
    <Grid fluid style={styles.Container}>
      <Row>
        <Col xs={12} xs={12} style={styles.header}>
          <FlexboxGrid>
            <FlexboxGrid.Item>
              <h4>Plan Population</h4>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Col>
      </Row>
      <Divider />
      <Row className="show-grid">
        <Form layout="horizontal">
          <Form.Group controlId="population">
            <Form.ControlLabel style={styles.Item}>
              Population
            </Form.ControlLabel>
            <Row>
              <Col md={10} xs={4}>
                <Slider
                  progress
                  min={10000}
                  max={10000000000}
                  step={100000}
                  style={{ marginTop: 16 }}
                  value={population}
                  onChange={(value) => {
                    setPopulation(value);
                  }}
                />
              </Col>
              <Col md={4} xs={4}>
                <InputNumber
                  min={10000}
                  max={1000000000}
                  value={population}
                  onChange={(value) => {
                    setPopulation(value);
                  }}
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId="gdp">
            <Form.ControlLabel style={styles.Item}> GDP </Form.ControlLabel>
            <Row>
              <Col md={10} xs={4}>
                <Slider
                  progress
                  max={1000000000}
                  min={10000}
                  step={1000000}
                  style={{ marginTop: 16 }}
                  value={gdp}
                  onChange={(value) => {
                    setGdp(value);
                  }}
                />  
              </Col>
              <Col md={4}>
                <InputNumber
                  min={10000}
                  max={1000000000}
                  value={gdp}
                  onChange={(value) => {
                    setGdp(value);
                  }}
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId="area">
            <Form.ControlLabel style={styles.Item}> Area </Form.ControlLabel>
            <Row>
              <Col md={10}>
                <Slider
                  progress
                  min={100}
                  max={10000000000}
                  step={100}
                  style={{ marginTop: 16 }}
                  value={area}
                  onChange={(value) => {
                    setArea(value);
                  }}
                />
              </Col>
              <Col md={4}>
                <InputNumber
                  min={100}
                  max={10000000000}
                  value={area}
                  onChange={(value) => {
                    setArea(value);
                  }}
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel style={styles.Item}>
              <Button appearance="default" onClick={getCO2}>
                CO2Emissions
              </Button>
            </Form.ControlLabel>
            <Form.ControlLabel style={styles.value}>
              {message}
            </Form.ControlLabel>
          </Form.Group>
        </Form>
      </Row>
    </Grid>
  );
}
