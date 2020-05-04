import React, {Component} from "react";
import CompanyProfile from "./companyProfile";
import CompanyProducts from "./companyProducts";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <span className="m-4">
          <Link to="/about">Home Page</Link>
        </span>
        <span className="m-4">
          <Link to="/products">Products</Link>
        </span>
        <Switch>
          <Route path="product/:productId"></Route>
          <Route path="/about">
            <CompanyProfile />
          </Route>
          <Route path="/products">
            <CompanyProducts />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Company;
