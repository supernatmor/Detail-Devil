import React, { Component } from "react";
import filler from "./filler.json"
import VBody from "./VBody"
import PBody from "./PBody"
import DBody from "./DBody"
import API from "../../Utils/API"
// import CC from "../controllers/companyController"

let tempP = "";
let tempV = "";

class Table extends Component {
  constructor(){
    super();
    this.state = {
      vendors: [],
      packages: "",
      details: ""
    };
    this.packageState = "";
  }
  sendBookingToServer() {
    // this.state is all booking info
  }
  handlePackageClick(dtl) {
    let details = dtl;
    this.setState({
        vendors:"",
        packages: "",
        details: details,
        bookingInfo: {
          name:"",
          location: "",
          package:"",
          summary: "",
          price: "",
          datetime:""
        }
    })
  }
  modifyBookingInfo(propName, propValue) {
    const bookingInfoCopy = Object.assign({}, this.state.bookingInfo);
    bookingInfoCopy[propName] = propValue;
    this.setState({bookingInfo: bookingInfoCopy});
  }
  backToP = () => {
    this.setState(this.packageState);
  }
  backToV = () => {
    this.setState(this.baseState);
  }
  handleVendorClick(pkg) {
    tempP = pkg;
    console.log(tempV);
    this.setState({
        vendors:"",
        packages: tempP,
        details: ""
    });
    this.packageState={
      vendors: "",
      packages: tempP,
      details: ""
    };
  }
  componentWillMount() {
    console.log('component will mount running');
    this.getVendors();
  }
  getVendors() {
    API.getVendors()
      .then(res => {
        console.log('db result', res);
        this.setState({ vendors: res.data });
        this.baseState = (this.state);
      })
      .catch(err => console.log(err));
  };
  render(){
    if(this.state.vendors){
          return(
            <div className="col-lg-8">
              <VBody v = {this.state.vendors} handleVendorClick = {(vendor) => this.handleVendorClick(vendor)}/> 
          </div>
          )

    } else if(this.state.packages) {
      return(
        <div className="col-lg-8">
        <PBody p = {this.state.packages} handlePackageClick={(dtl) => this.handlePackageClick(dtl)} backToV = {this.backToV}/>
        </div>
      )
    } else if(this.state.details){
      return(
        <div className="col-lg-8">
        <div className="row"></div><div className="row"></div><div className="row"></div><div className="row"></div>
        <DBody d = {this.state.details} backToP = {this.backToP} />
        </div>
      )
    }
  }
}

export default Table