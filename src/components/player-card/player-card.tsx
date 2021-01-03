import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./player-card.scss";
import player from "../../assets/images/zidane.png";

interface PlayerCardProps {
  playerId: string;
  playerDetails?: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ playerId, playerDetails }) => {
  return (
    <Card className="mx-2">
        <Card.Img className="player-image" variant="top" src={player} />
        <Card.Body>
          <Card.Title>{playerId}</Card.Title>
          <Card.Text>{playerDetails}</Card.Text>
          <div className="d-flex justify-content-end">
            <div className="d-flex justify-content-between">
              <Button className="mx-1 py-0 px-3" variant="light">Sell</Button>
              <Button className="mx-1 py-0 px-3" variant="primary">Buy</Button>
            </div>
          </div>
        </Card.Body>
    </Card>
  );
};

export default PlayerCard;
