import PropTypes from "prop-types";
import React from "react";

function PropExample({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age + 5} years old.</p>
    </div>
  );
}

export default PropExample;

PropExample.propTypes = {
  name: PropTypes.any.isRequired,
  age: PropTypes.number,
};
