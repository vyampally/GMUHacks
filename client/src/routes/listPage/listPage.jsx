import "./listPage.scss";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import { useEffect, useState } from "react";
import { listData } from "../../lib/dummydata"; // Import your hardcoded data

function ListPage() {
  const [filteredData, setFilteredData] = useState(listData); // Initialize with all data

  const handleFilterChange = (filters) => {
    const { priceRange, bedrooms, bathrooms } = filters; // Get filter criteria from filters object

    const filtered = listData.filter((item) => {
      let matches = true;
      if (priceRange) {
        matches = matches && item.price >= priceRange[0] && item.price <= priceRange[1];
      }
      if (bedrooms) {
        matches = matches && item.bedrooms >= bedrooms;
      }
      if (bathrooms) {
        matches = matches && item.bathrooms >= bathrooms;
      }
      return matches;
    });

    setFilteredData(filtered); // Update state with filtered data
  };

  useEffect(() => {
    // Initial load or side effects can go here if needed
  }, []);

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter onFilterChange={handleFilterChange} /> {/* Pass the handler to Filter */}
          {filteredData.map((post) => (
            <Card key={post.id} item={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListPage;
