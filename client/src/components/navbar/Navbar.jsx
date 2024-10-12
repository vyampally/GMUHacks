import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom"; // Make sure you're using Link from react-router-dom
import { AuthContext } from "../../context/AuthContext";
import { useNotificationStore } from "../../lib/notificationStore";

function Navbar() {
  const [open, setOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const fetch = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.number);

  if (currentUser) fetch();

  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">  {/* Change to Link */}
          <img src="/bg.png" alt="HomeConnect" />
          <span>HomeConnect</span>
        </Link>
        <Link to="/">Home</Link>  {/* Use Link instead of <a> */}
        <Link to="/document-manager">Document Manager</Link>  {/* Corrected the route path */}
        <Link to="/contact">Contact</Link>  {/* Assuming you have a Contact page */}
        <Link to="/first-time-home-buyer">First Time Home Buyer?</Link>  {/* Link to the correct page */}
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              {number > 0 && <div className="notification">{number}</div>}
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/login">Sign in</Link>  {/* Change to Link */}
            <Link to="/register" className="register">Sign up</Link>  {/* Change to Link */}
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/first-time-home-buyer">First Time Home Buyer?</Link>
          <Link to="/login">Sign in</Link>
          <Link to="/register">Sign up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
