import React, { Component } from "react";
// import filler from "./filler.json"
import VBody from "./VBody"
import PBody from "./PBody"
import DBody from "./DBody"
import API from "../../Utils/API"
// import CC from "../controllers/companyController"

class Table extends Component {

  state = {
    vendors: ""
    // packages: "",
    // details: ""
  };

  componentDidMount() {
    this.getVendors();
  }

  getVendors = () => {
    API.getVendors()
      .then(res => this.setState({ vendors: res.data }))
      .catch(err => console.log(err));
  };


  render(){
      return(
          <div className="col-lg-8">
            <button className="btn btn-primary" onClick={this.state.renVendor}>rendor vendor</button> 
            <button className="btn btn-secondary" onClick={this.state.renPackage}>rendor packages</button>
            <button className="btn btn-success" onClick={this.state.renDetails}>rendor details</button>


            <VBody v = {this.state.vendors} /> 
            {/* <PBody p = {this.state.vendors[8].Packages} />
            <DBody d = {this.state.vendors[0].Packages[0]} /> */}
            

            
          </div>
      )
  }
}

export default Table