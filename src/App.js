import "./App.css";
import React, { useState } from "react";
import Feedback from "./components/Feedback";
import Review from "./components/Review";

function App() {
  const [coments, setComents] = React.useState([]);

  const addComment = () => {

  }

  return (
    <React.Fragment>
        <Review/>
      <Feedback />
    </React.Fragment>
  );
}

export default App;
