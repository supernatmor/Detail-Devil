import React from "react";

export const DBody = props =>{
  return (

<div>
    <h1 className="text-center nat-header"> Finally select from any available time to proceed to booking</h1><hr />
    <table className="table nats-table">
              <thead>
                <tr>
                  <td className="text-center">{props.d.Name}</td>
                  <td className="text-center">{props.d.Price}</td>
                  <td className="text-center">{props.d.Description}</td>
                  <td className="text-center">{props.d.timeToComplete}</td>
                </tr>
              </thead>
              </table>
              <div className="row text-center">
                {props.d.availableTimes.map( (Time, index) => {
                  return (
                      <div className="col-lg-1 col-md-1 col-sm-1" key={index}>
                        <a className="nats-links" onClick={() => props.sendBookingToServer(Time)}>|{Time}|</a>
                    </div>
                  )
                })}
              </div>
    <div className="row">
      <a className="detail_btn" onClick={props.backToPackages}> Back to Packages</a>
    </div>    
</div>
              

);
  }

  export default DBody
