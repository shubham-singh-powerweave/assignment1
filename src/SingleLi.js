import React from "react";

const SingleLi = (props) => {
  return (
    <li className="concept">
      <img src={props.customConcepts.image} alt={props.customConcepts.image} />
      <h2>{props.customConcepts.title}</h2>
      <p>{props.customConcepts.description}</p>
    </li>
  );
};

export default SingleLi;
