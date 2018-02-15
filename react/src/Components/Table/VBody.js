import React from "react";

export const VBody = props =>{
  return (
    <table className="table">
              <thead>
                      <tr>
                      <th scope="col" className="text-center">Vendor</th>
                      <th scope="col" className="text-center">City</th>
                      <th scope="col" className="text-center">Min. Price</th>
                      <th scope="col" className="text-center">Min Time</th>
                      </tr>
                  </thead>
                  <tbody>

                  {props.v.map( (Vendor, index) => {
                  return (
                    <tr>
                      <td><a onClick={() => props.handleVendorClick(Vendor.Packages)}>{Vendor.Name}</a></td>
                      <td>{Vendor.Location}</td>
                      <td>{Vendor.Packages[0].Price}</td>
                      <td>{Vendor.Packages[0].timeToComplete}</td>
                    </tr>
                  )
                })}
                    

                  </tbody>


              </table>
    
);
  }

  export default VBody
