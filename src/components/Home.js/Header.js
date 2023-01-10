import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Good Food Choices are good investments</h2>
            <button>order now</button>
            <button>learn more</button>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </header>
  );
};
export default Header;
