import React from "react";

export const DBody = props =>{
  return (

<div>
    <table className="table">
              <thead>
                <tr>
                  <td className="text-center">{props.d.Name}</td>
                  <td className="text-center">{props.d.Price}</td>
                  <td className="text-center">{props.d.Description}</td>
                  <td className="text-center">{props.d.timeToComplete}</td>
                </tr>
              </thead>
              </table>
              
                {props.d.availableTimes.map( (Time, index) => {
                  return (
                    
                    <div className="col-lg-1 col-md-1 col-sm-1">
                    <a>|{Time}|</a>
                    </div>
                  )
                })}    
</div>
              

);
  }

  export default DBody
