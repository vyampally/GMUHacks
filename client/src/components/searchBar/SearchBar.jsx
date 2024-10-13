import { useState } from "react";
import "./searchBar.scss";
import { Link } from "react-router-dom";

const types = ["Buy"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "Buy",
    city: "Fairfax", // Default value set to Fairfax
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input
          type="text"
          name="city"
          placeholder="City"
          value={query.city} // Bind value to state for controlled input
          disabled // Make the input non-editable and greyed out
        />
        <Link
          to={`/list?type=${query.type}&city=${query.city}`} // Updated link to remove min/max
        >
          <button type="button"> {/* Add type="button" to prevent form submission */}
            <img src="/search.png" alt="Search" />
            Search Now
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;
