import React, { useState } from "react";
import movieService from "../services/movieService";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = async (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <section className="hero">
      <div className="hero-body">
        <form>
          <div className="field has-addons">
            <div className="control is-expanded">
              <input
                className="input"
                placeholder="Search for movie title, genre or actor"
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text"
              />
            </div>
            <div className="control">
              <a
                className="button is-warning"
                onClick={callSearchFunction}
                type="submit"
              >
                Search
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Search;
