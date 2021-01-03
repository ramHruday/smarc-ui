import React from "react";
import "./App.scss";
import Navbar from "./navbar/navbar";
import { BrowserRouter as Router } from "react-router-dom";
import MainPage from "./main-page/main-page";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar brandName="SMARC" />
        <MainPage />
      </div>
    </Router>
  );
}

export default App;

// <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="holder.js/100px180" />
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//     <Button variant="primary">Go somewhere</Button>
//   </Card.Body>
// </Card>
