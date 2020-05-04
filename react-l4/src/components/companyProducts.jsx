import React, {Component} from "react";

class CompanyProducts extends Component {
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
  render() {
    return (
      <div className="container mb-4">
        <div className="row m-4">
          <h3>Products:</h3>
        </div>
        <ul className="list-group">
          {this.state.products.map((product) => (
            <li key={product.id} className="list-group-item">
              <div>
                <p>{product.prodName}</p>
              </div>
              <div className="row">
                <div className="col-2">
                  <img width="100" src={product.prodUrl} alt="Product" />
                </div>
                <div className="col-5">
                  <p>{product.prodInfo}</p>
                </div>
                <div className="col-2">
                  <button className="btn btn-primary btn-sm">More Info</button>
                </div>
                <div className="col-3">
                  <button className="btn btn-success btn-sm">Buy</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CompanyProducts;
