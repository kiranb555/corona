import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

import Home from "./pages/Home";
import Precaution from "./pages/Precaution";
import Faq from "./pages/Faq";
import Country from "./pages/Country";

import Header from "./components/header";
import Footer from "./components/footer";

import StickyButton from "./components/button/StickyButton";

const App = props => {
  // updating data to redux store
  useEffect(() => {
    axios
      .get("https://pomber.github.io/covid19/timeseries.json")
      .then(res => props.updateData(res.data))
      .catch(err => console.log(err));
  }, []);

  const scrollTo = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/precaution" component={Precaution}></Route>
            <Route exact path="/faq" component={Faq}></Route>
            <Route exact path="/country/:name" component={Country}></Route>
            <Route>
              <Home />
            </Route>
          </Switch>
          <StickyButton click={() => scrollTo()} />
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
