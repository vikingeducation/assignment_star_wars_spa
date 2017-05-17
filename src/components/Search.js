import React from "react";
import Input from "./elements/Input";
import InputGroup from "./elements/InputGroup";
import Button from "./elements/Button";

const Search = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <InputGroup name="searchText" labelText="Search Names">
      <Input name="searchText" />
    </InputGroup>
    <Button type="submit" color="primary">Search</Button>
  </form>
);

export default Search;
