import React from "react";
// it is the notification that will pop out
export default function Alert(props) {
  return (
    // Alert in bootstrap
    <div style={{ height: "10px" }}>
      {props.alert && 
        <div className="alert alert-info {props.alert.type}" role="alert">
          <strong>{props.alert.type}</strong>:{props.alert.msg}
      </div>}
    </div>
  );
}
