import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import History from "./pages/History";
import Safety from "./pages/Safety";
import Update from "./pages/Update";

import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/history">
            <History />
          </Route>
          <Route exact path="/safety">
            <Safety />
          </Route>
          <Route exact path="/update">
            <Update />
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
