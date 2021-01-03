import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop";
import Home from "./pages";
import ExpPage from "./pages/ExpPage";
import BlogPage from "./pages/BlogPage";
import GalleryPage from "./pages/GalleryPage";
import AchPage from "./pages/AchPage";
import Footer from "./component/Foot";
import BlogContainers from "./component/BlogContainers";
import NotFoundPage from "./pages/404Page";
import Sidebar from "./component/SideBar";
import Navbar from "./component/Navbar";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/experience" component={ExpPage} exact />
        <Route path="/achievement" component={AchPage} exact />
        <Route path="/blog" component={BlogPage} exact />
        <Route path="/galleries" component={GalleryPage} exact />
        <Route path="/blogscontainer/:title" component={BlogContainers} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;