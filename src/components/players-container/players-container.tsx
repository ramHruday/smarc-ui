import React from "react";
import { Button, Card,  Col } from "react-bootstrap";
import PlayerCard from "../player-card/player-card";
import { dummy_players } from "./dummy-players";
import "./players-container.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
interface PlayerContainerProps {
  brandName?: string;
}

const PlayerContainer: React.FC<PlayerContainerProps> = ({ brandName }) => {
  return (
    <Carousel
      swipeable
      draggable
      showDots={true}
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      renderButtonGroupOutside={true}
      renderDotsOutside
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {dummy_players.map((player) => (
        <PlayerCard playerId={player.id} playerDetails={player.details} />
      ))}
    </Carousel>
  );
};

export default PlayerContainer;
