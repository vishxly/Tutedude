import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
