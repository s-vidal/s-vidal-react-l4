import React, {Component} from "react";
import CompanyProfile from "./companyProfile";
import CompanyProducts from "./companyProducts";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import ProductPage from "./productPage";

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          prodName: "Pixel 4",
          prodUrl:
            "https://lh3.googleusercontent.com/IgA4PQZQdlUFiA-4PxPIAJSajaPzmDmM5pM8pdGVfZy4-XLZq0YICKg42xaUOcBTSaM=rw-w2448",
          prodInfo: "Save $300 on unlocked Pixel 4/4 XL.",
        },
        {
          id: 2,
          prodName: "Pixel Buds",
          prodUrl:
            "https://lh3.googleusercontent.com/27ajHESTnpwU2yK-YWQ2b5_y87Kj91QeC6qJaVlMR9ZWDZKyi76QGNIuAuyorf_pX84=rw-w2448",
          prodInfo:
            "Save $99 when you bundle Nest Wifi router and point, Nest Hub Max, and Chromecast.",
        },
        {
          id: 3,
          prodName: "PixelBook",
          prodUrl:
            "https://lh3.googleusercontent.com/LUpJk1hpypggYduWvgcyfTbx7CZ420B6nlGo3hvqdFovCKqi0qoGFpVAg270nuwbpjbu5iNCl9O1xvr9EdGxC0M=v0-rj-sc0x00FFFFFF-w120",
          prodInfo: "From $649 or $27.04/mo for 24 mos",
        },
      ],
    };
  }

  handleInfoRequest = (product) => {
    console.log(product.id);
  };

  render() {
    console.log(this.props);

    return (
      <Router>
        <nav className="nav nav-tabs">
          <span className="m-4 nav-item">
            <Link className="nav-link" to="/about">
              Home Page
            </Link>
          </span>
          <span className="m-4 nav-item">
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </span>
        </nav>
        <Switch>
          <Route path="/product/:productId">
            <ProductPage products={this.state.products} />
          </Route>
          <Route path="/about">
            <CompanyProfile />
          </Route>
          <Route path="/products">
            <CompanyProducts
              products={this.state.products}
              onInfoRequest={this.handleInfoRequest}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Company;
