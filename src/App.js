import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./components/Home";
import Ideas from "./components/Ideas";
import Countdown from "./components/Countdown";
import How from "./components/How";

function App() {
  return (
    <div>
      <Router>
        {/* navigation would go here */}
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/how" component={How} />
          <Route path="/ideas" component={Ideas} />
          <Route path="/countdown" component={Countdown} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
