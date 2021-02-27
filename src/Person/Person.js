import React from "react";
import "./Person.css";

/*
CSS styling : how to style css. 
when you check the HTML in the public folder , you will not see the css. 
But if you inspect the code behind in the browser, you will see the CSS, that 
is because webpack bundles the css behind the scene. 
* */
const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I am {props.name} and I am {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.Changed} value={props.name}></input>
    </div>
  );
};

export default person;
