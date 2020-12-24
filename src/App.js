import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop";
import Navbar from "./component/Navbar";
import Home from "./pages";
import ExpPage from "./pages/ExpPage"
import Footer from "./component/Foot";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/experience" component={ExpPage} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;