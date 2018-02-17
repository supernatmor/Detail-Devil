import React from "react";

export const PBody = props =>{
  return (
    <div>
      <h1 className="text-center"> Now select a detail package</h1>
      <table className="table nats-table">
        <thead>
          <tr>
          <th scope="col" className="text-center">Package</th>
          <th scope="col" className="text-center">Services</th>
          <th scope="col" className="text-center">Price</th>
          <th scope="col" className="text-center">Time</th>
          </tr>
        </thead>
        <tbody>
          {props.p.map( (Package, index) => {
            return (
              <tr key = {index}>
                <td className="text-center"><a onClick={() => props.handlePackageClick(props.p[index])}>{Package.Name}</a></td>
                <td className="text-center">{Package.Description}</td>
                <td className="text-center">{Package.Price}</td>
                <td className="text-center">{Package.timeToComplete}</td>
              </tr>
              )}
            )
          }                
        </tbody>
      </table>
      <div className="row">
        <a onClick={props.backToVendors}> Back to Vendors </a>
      </div>
    </div>
  );
}

  export default PBody
