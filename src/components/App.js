import React from "react";
import "./App.css";

import StripeContainer from "./components/StripeContainer";

function App() {
  return (
    <div className="App">
      <h1>Easy Scooter</h1>
      {<StripeContainer />}
    </div>
  );
}

export default App;
