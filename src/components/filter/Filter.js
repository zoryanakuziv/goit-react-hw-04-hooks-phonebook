import React from "react";
import PropTypes from "prop-types";
import { FilterInput } from "./Filter.styled";

const Filter = ({ filter, onChange }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <FilterInput
        type="text"
        value={filter}
        onChange={({ target }) => onChange(target.value)}
        name="filter"
        title=""
        required
      />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
