import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./components/Sidebar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DashboardScreen from "./screens/DashboardScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileCardScreen from "./components/ProfileCard";
import ProfileScreen from "./screens/ProfileScreen";

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
                <Route path="/" element={<HomeScreen />} />
                <Route path="dashboard" element={<DashboardScreen />} />
                <Route path="profiles/:profileId" element={<ProfileScreen />} />
            </Routes>
          </Col>

        </Row>
      </Router>
    </Container>
  );
}

export default App;
