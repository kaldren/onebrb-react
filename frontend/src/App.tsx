import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./components/Sidebar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import Home from "./screens/Home";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <Container fluid className="App">
      <Router>
        <Row>

          <Col xs lg="2">
            <Sidebar />
          </Col>

          <Col xs lg="10">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="dashboard" element={<Dashboard />} />
            </Routes>
          </Col>

        </Row>
      </Router>
    </Container>
  );
}

export default App;
