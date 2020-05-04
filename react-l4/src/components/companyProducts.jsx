import React, {Component} from "react";

class CompanyProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container mb-4">
        <div className="row m-4">
          <h3>Products:</h3>
        </div>
        <ul className="list-group">
          {this.props.products.map((product) => (
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
                  <button
                    onClick={() => this.props.onInfoRequest(product)}
                    className="btn btn-primary btn-sm"
                  >
                    More Info
                  </button>
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
