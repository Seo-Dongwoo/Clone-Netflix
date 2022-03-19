import React from "react";
import "./Header.css";

const Header = ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://blog.kakaocdn.net/dn/c4jzIT/btrghQIPMkh/sByblE0p50HHtMiEDdn8k1/img.png"
            alt="Netflix"
          />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img
            src="https://ih0.redbubble.net/image.618427277.3222/flat,35x35,075,f.u2.jpg"
            alt="User"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
