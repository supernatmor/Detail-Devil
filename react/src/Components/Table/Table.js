//imports necessary components
import React, { Component } from "react";
import filler from "./filler.json"
import VBody from "./VBody"
import PBody from "./PBody"
import DBody from "./DBody"
import API from "../../Utils/API"
// import CC from "../controllers/companyController"


// set temp variable for packages - used to modify state
let tempPackages = "";
let tempVendor = "";

class Table extends Component {
  constructor(){
    super();
    //set initial state of table component
    this.state = {
      vendors: [],
      packages: "",
      details: "",
      bookingInfo: [{//this will hold necessary information to pass into booking page
        name:"",
        location: "",
        package:"",
        summary: "",
        price: "",
        datetime:""
      }]
    };
    //new variable to transition between vendors, packages, and times
    this.packageState = "";
  }
  //this function will run when clicking a book time and send bookingInfo to booking page
  sendBookingToServer() {
    const send = this.state.bookingInfo;
    API.bookingHelper(send);
  }
  //event handler for when a user selects a specific vendor
  //sets state for table to render all packages and package details from that vendor
  handleVendorClick(pkg, vendor) {
    console.log('vendor that was clicked', vendor);
    console.log('packages', pkg);
    tempPackages = pkg;
    // console.log(vendor);
    // console.log(name, address);
    //sets state for main component to render packages
    this.setState({
        vendors:"",
        packages: tempPackages,
        details: "",
    });
    //sets packageState to the most recent packages so can revert from details if necessary
    this.packageState={
      vendors: "",
      packages: tempPackages,
      details: ""
    };
    this.modifyBookingInfo(name, vendor.Name);
  }
  //event handler for when a user selects a specific package
  //sets state for table to render details and available times for that package
  handlePackageClick(dtl) {
    let details = dtl;
    this.setState({
        vendors:"",
        packages: "",
        details: details
        }
    )
  }
//function to modify bookingInfo state property so it can be sent to booking page
  modifyBookingInfo(propName, propValue) {
    const bookingInfoCopy = Object.assign({}, this.state.bookingInfo);
    console.log('raw booking info copy: ', bookingInfoCopy);
    bookingInfoCopy[propName] = propValue;
    console.log('modified info copy', bookingInfoCopy);
    this.setState({bookingInfo: bookingInfoCopy});
    console.log('state.bI after setstate method', this.state.bookingInfo);
  }
  //function to return to packages state from detail state
  backToPackages = () => {
    this.setState(this.packageState);
  }
  //function to return to base state of vendor list from package state
  backToVendors = () => {
    this.setState(this.baseState);
  }
  //when component mounts, run getVendors to populate this.state.vendors array
  componentWillMount() {
    //console.log('component will mount running');
    this.getVendors();
  }
  //api call to retrieve vendors list from database
  getVendors() {
    API.getVendors()
      .then(res => {
        //console.log('db result', res);
        this.setState({ vendors: res.data });
        this.baseState = (this.state);//sets separate state of vendor list to return to from packages
      })
      .catch(err => console.log(err));
  };
  //renders page
  render(){
    if(this.state.vendors){//base state of vendor list
          return(
            <div className="col-lg-8 col-lg-offset-2">
              <VBody v = {this.state.vendors} handleVendorClick = {(pkg, vendor) => this.handleVendorClick(pkg, vendor)}/> 
          </div>
          )

    } else if(this.state.packages) {//state with packages for selected vendor
      return(
        <div className="col-lg-8 col-lg-offset-2">
        <PBody p = {this.state.packages} handlePackageClick={(dtl) => this.handlePackageClick(dtl)} backToVendors = {this.backToVendors}/>
        </div>
      )
    } else if(this.state.details){//state with details for selected package
      return(
        <div className="col-lg-8 col-lg-offset-2">
        <div className="row"></div><div className="row"></div><div className="row"></div><div className="row"></div>
        <DBody d = {this.state.details} backToPackages = {this.backToPackages} sendBookingToServer= {(send) => this.sendBookingToServer(send)}/>
        </div>
      )
    }
  }
}

export default Table