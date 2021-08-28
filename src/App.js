import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import Ideas from "./pages/Ideas";
import Countdown from "./pages/Countdown";
import How from "./pages/How";
import Whoops404 from "./pages/Whoops404";

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
          <Route path="*" component={Whoops404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
