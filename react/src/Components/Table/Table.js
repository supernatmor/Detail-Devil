import React, { Component } from "react";
import filler from "./filler.json"
import VBody from "./VBody"
import PBody from "./PBody"
import DBody from "./DBody"
import API from "../../Utils/API"
// import CC from "../controllers/companyController"

class Table extends Component {
  constructor(){
    super();
    this.state = {
      vendors: filler,
      packages: "",
      details: ""
    };

    this.handleVendorClick = pkg => {
      let packages = pkg;
      this.setState({
          vendors:"",
          packages: packages,
          details: ""
      })
    };
  
  
    this.handlePackageClick = dtl => {
      let details = dtl;
      alert(details);
      this.setState({
          vendors:"",
          packages: "",
          details: details
      })
    };
  }


  // componentDidMount() {
  //   this.getVendors();
  // }

  // getVendors = () => {
  //   API.getVendors()
  //     .then(res => this.setState({ vendors: res.data }))
  //     .catch(err => console.log(err));
  // };





  render(){
    if(this.state.vendors){
          return(<div className="col-lg-8">
            <VBody v = {this.state.vendors} handleVendorClick ={this.handleVendorClick}/> 
          </div>)

    } else if(this.state.packages){
      return(
      <div className="col-lg-8">
      <PBody p = {this.state.packages} handlePackageClick={this.handlePackageClick} backToVendors = {this.backToVendors}/>
      </div>
      )
    } else if(this.state.details){
      return(
        <div className="col-lg-8">
        <DBody d = {this.state.details} backToPackages = {this.backToPackages}/>
        </div>
      )
    }

  }
}

export default Table