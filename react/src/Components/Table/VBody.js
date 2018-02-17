import React from "react";

export const VBody = props =>{
  return (
    <div>
      <h1 className="text-center">Select from one of our quality detailing vendors</h1>
        <table className="table nats-table">
          <thead>
            <tr>
              <th scope="col" className="text-center">Vendor</th>
              <th scope="col" className="text-center">City</th>
              <th scope="col" className="text-center">Min. Price</th>
              <th scope="col" className="text-center">Min Time</th>
            </tr>
          </thead>
          <tbody>
            {props.v.map( (Vendor, index) => {//maps through array of vendors to display name, city, minimum price & time to complete
                return (
                  <tr key = {index}>
                    <td className="text-center"><a onClick={() => props.handleVendorClick(Vendor.Packages, props.v[index])}>{Vendor.Name}</a></td>
                    <td className="text-center">{Vendor.Location}</td>
                    <td className="text-center">{Vendor.Packages[0].Price}</td>
                    <td className="text-center">{Vendor.Packages[0].timeToComplete}</td>
                  </tr>
                  )
                }
              )
            }
          </tbody>
        </table>
    </div>
  );
}

  export default VBody
