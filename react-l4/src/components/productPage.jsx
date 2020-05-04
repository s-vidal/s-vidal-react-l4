import React, {Component} from "react";

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {product: {}};
  }
  componentDidMount() {
    const product = this.props.products.filter(
      (product) => productId.toString() === product.id
    );
    this.setState({product});
  }

  render() {
    const {product} = this.state;
    return (
      <div className="container m-4">
        <h3>Product Information:</h3>
        <div className="row">
          <div className="col">
            <h4>{product.prodName}</h4>
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

export default ProductPage;
