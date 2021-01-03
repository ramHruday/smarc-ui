import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PlayerContainer from "../components/players-container/players-container";
import "./main-page.scss";

interface MainPageProps {
  brandName?: string;
}

const MainPage: React.FC<MainPageProps> = ({ brandName }) => {
  return (
    <Container as="main">
      <Row className="my-2 py-5">
        <Col>
          <PlayerContainer />
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
