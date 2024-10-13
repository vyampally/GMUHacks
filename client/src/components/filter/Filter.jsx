import React, { useState } from "react";

const Filter = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([0, 1000000]); // Default range
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);

  const handleApplyFilters = () => {
    onFilterChange({ priceRange, bedrooms, bathrooms });
  };

  return (
    <div className="filterContainer">
      <h2>Filters</h2>
      <div>
        <label>Price Range:</label>
        <input
          type="number"
          value={priceRange[0]}
          onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
        />
        -
        <input
          type="number"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
        />
      </div>
      <div>
        <label>Bedrooms:</label>
        <input
          type="number"
          value={bedrooms}
          onChange={(e) => setBedrooms(+e.target.value)}
        />
      </div>
      <div>
        <label>Bathrooms:</label>
        <input
          type="number"
          value={bathrooms}
          onChange={(e) => setBathrooms(+e.target.value)}
        />
      </div>
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default Filter;
