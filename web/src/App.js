import React, { useState } from "react";
import "./App.css";
import scooter from "./assets/scooter_01.png";
import StripeContainer from "./components/StripeContainer";

function App() {
  const [showItem, setShowItem] = useState(false);
  return (
    <div className="App">
      <h1>Easy Scooter</h1>
      {showItem ? (
        <StripeContainer />
      ) : (
        <>
          <h3>5€</h3>
          <img class="scooter" src={scooter} alt="Scooter" />
          <button onClick={() => setShowItem(true)}>Rent Scooter</button>
        </>
      )}
    </div>
  );
}

export default App;
