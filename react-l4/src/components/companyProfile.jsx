import React, {Component} from "react";

class CompanyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      compName: "Google",
      compInfo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et perferendis unde eligendi nulla laudantium magni? Voluptatum exercitationem eaque impedit repellendus, quasi quidem inventore quia? Cupiditate iste officiis temporibus praesentium harum.",
      compUrl:
        "https://lh3.googleusercontent.com/_RS8nTX8HLPW-dDr374dEdQTaYn-7LI8HVVk0INaAmk7t8MYZKDssvGnep-GwPR94LJPxqq6UDnbm4tonioTpkl4Kqr6-k-670teZA=h128",
      compLink: "https://about.google/products/",
    };
  }
  render() {
    const {compName, compInfo, compUrl, compLink} = this.state;
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-1 mr-5 mt-4">
            <h3>{compName}</h3>
          </div>
          <div className="col-1">
            <img width="80" src={compUrl} alt="Google Logo" />
          </div>
        </div>
        <div className="mt-4">
          <p>{compInfo}</p>
        </div>
        <div className="mt-4">
          <a href={compLink}>
            <p>{compLink}</p>
          </a>
        </div>
      </div>
    );
  }
}

export default CompanyProfile;
