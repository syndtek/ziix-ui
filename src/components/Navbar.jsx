import React from "react";

const Navbar = () => {
  return (
    <nav className="light-blue darken-4">
      <div className="container">
        <div className="nav-wrapper">
          <a href="" className="brand-logo">
            ZiiX
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="">Catalog</a>
            </li>
            <li>
              <a href="">Bookmarks</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
