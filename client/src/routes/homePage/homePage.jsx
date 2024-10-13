import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          {/* Moved image here */}
          <img src="/bg.png" alt="logo" className="logo" />
          <h1 className="title">Fairfax Housing? HomeConnect is here to help.</h1>
          <p>
            Looking for affordable housing that meets both your budget and lifestyle? 
            HomeConnect is here to simplify your search and connect you to the perfect home in Fairfax. 
            Whether you're renting or buying, we make it easy to find options that fit your needs, all while considering environmental impact and sustainability. 
            HomeConnect is your trusted companion for finding affordable, sustainable, and comfortable housing in Fairfax. 
            Start your search today!
          </p>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
