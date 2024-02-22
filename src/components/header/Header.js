import React from "react";
import "./Header.scss";

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__content">
            <div className="header__title">Movie Dorama Lend</div>
            <div className="header__ganre">
              <ul>
                <li>crime</li>
                <li>thriller</li>
                <li>detective</li>
                <li>horror</li>
                <li>drama</li>
                <li>comedy</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
