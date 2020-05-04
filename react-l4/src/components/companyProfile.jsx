import React, {Component} from "react";

class CompanyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      compName: "Google",
      compInfo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et perferendis unde eligendi nulla laudantium magni? Voluptatum exercitationem eaque impedit repellendus, quasi quidem inventore quia? Cupiditate iste officiis temporibus praesentium harum.",
      compUrl: "",
      compLink: "https://about.google/products/",
    };
  }
  render() {
    const {compName, compInfo, compUrl, compLink} = this.state;
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-2 mr-5">
            <h3>{compName}</h3>
          </div>
          <div className="col-1">
            <img src={compUrl} alt="Google Logo" />
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
