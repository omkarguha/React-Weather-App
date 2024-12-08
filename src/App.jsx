import { useEffect } from "react";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import { useWeather } from "./context/Weather";

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Box from "./components/Box";

function App() {
  const weather = useWeather();

  useEffect(() => {
    weather.fetchCurrentUserLocationData();
  }, []);

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input />
      <Button onClick={weather.fetchData} value="Search" />
      <Card />
      <Container className="con">
        <Row>
          <Col><Box city="Bengaluru"/></Col>
          <Col><Box city="Canberra"/></Col>
          <Col><Box city="Mumbai"/></Col>
        </Row>
        <Row>
          <Col><Box city="Hyderabad"/></Col>
          <Col><Box city="Pune"/></Col>
          <Col><Box city="Kolkata"/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
