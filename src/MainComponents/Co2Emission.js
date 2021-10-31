import React, { useEffect, useState } from "react";
import { Grid, Divider, Row, Col, FlexboxGrid, Form, Button } from "rsuite";
const restEndpoint = "http://localhost:3000/computeco2";
export default function Co2Emission() {
  const [message, setMessage] = useState("Sample");
  const [population, setPopulation] = useState(0);
  const [gdp, setGdp] = useState(0);
  const [area, setArea] = useState(0);
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
      width: "auto",
    },
    header: {
      marginLeft: "60px",
    },
  };
  useEffect(() => {
    // getCo2()
  });
  const getCo2 = () => {
    let countyinfo = [
      {
        population: parseFloat(population),
        gdp: parseFloat(gdp),
        area: parseFloat(area),
      },
    ];

    setMessage("Carbon Emission for given region is ");
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
      setMessage("Carbon Emission for given region is " + jsonResponse);
    };
    callRestApi();
  };

  return (
    <Grid fluid style={styles.Container}>
      <Row>
        <Col xs={12} xs={12} style={styles.header}>
          <FlexboxGrid>
            <FlexboxGrid.Item>
              <h4>Please provide county details...</h4>
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
            <Form.Control
              type="text"
              placeholder="population"
              name="population"
              onChange={(e) => {
                setPopulation(e);
              }}
              value={population}
            />
          </Form.Group>
          <Form.Group controlId="gdp">
            <Form.ControlLabel style={styles.Item}> GDP </Form.ControlLabel>
            <Form.Control
              type="text"
              placeholder="GDP"
              name="gdp"
              onChange={(e) => {
                setGdp(e);
              }}
              value={gdp}
            />
          </Form.Group>
          <Form.Group controlId="area">
            <Form.ControlLabel style={styles.Item}> Area </Form.ControlLabel>
            <Form.Control
              placeholder="Area"
              name="area"
              type="text"
              onChange={(e) => {
                setArea(e);
              }}
              value={area}
            />
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel style={styles.Item}>
              <Button appearance="default" onClick={getCo2}>
                CO2Emissions
              </Button>{" "}
            </Form.ControlLabel>
            <Row>
              <Form.ControlLabel style={styles.value}>
                {message}
              </Form.ControlLabel>
            </Row>
          </Form.Group>
        </Form>
      </Row>
    </Grid>
  );
}
