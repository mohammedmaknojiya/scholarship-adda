import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./Navbar/NavBar";
import Footer from "./Footer/Footer";
import HomePage from "./HomePage/HomePage";
import AllScholarshipList from "./AllScholarshipList/AllScholarshipList";
import SingleScholarship from "./SingleScholarship/SingleScholarship";
import AddScholarship from "./AddScholarship/AddScholarship";
import AdminPanelSchList from "./AdminPanel/AdminPanelSchList/AdminPanelSchList";
import AdminPanelVerify from "./AdminPanel/AdminPanelVerify/AdminPanelVerify";
import SignUp from "./AuthenticationModule/SignUp/SignUp";
import Login from "./AuthenticationModule/Login/Login";
import AdminPanel from "./AdminPanel/AdminPanel";
import "./Layout.css";

const Layout = () => {
  return (
    <BrowserRouter>
      <div className="layout-items">
        <NavBar />
        <div className="layout-body">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/allSchList" component={AllScholarshipList} />
            <Route exact path="/singleSch/:id" component={SingleScholarship} />
            <Route exact path="/addSch" component={AddScholarship} />
            <Route exact path="/adminPanel" component={AdminPanel} />
            <Route
              exact
              path="/adminPanelSchList"
              component={AdminPanelSchList}
            />
            <Route
              exact
              path="/adminPanelVerify"
              component={AdminPanelVerify}
            />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>

        <div className="layout-footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
