import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

import Home from "./pages/Home";
import History from "./pages/History";
import Safety from "./pages/Safety";
import Update from "./pages/Update";
import Country from "./pages/Country";

import Header from "./components/header";
import Footer from "./components/footer";

const App = props => {
  // updating data to redux store
  useEffect(() => {
    axios
      .get("https://pomber.github.io/covid19/timeseries.json")
      .then(res => props.updateData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/history" component={History}></Route>
            <Route exact path="/safety" component={Safety}></Route>
            <Route exact path="/update" component={Update}></Route>
            <Route exact path="/country/:name" component={Country}>
            </Route>
            <Route>
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

const mapDispatchToProp = dispatch => {
  return {
    updateData: data => {
      dispatch({ type: "UPDATE_DATA", payload: data });
    }
  };
};
export default connect(null, mapDispatchToProp)(App);
