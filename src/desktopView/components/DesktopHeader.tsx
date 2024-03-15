import React, { useState } from "react";
import "./desktopheader.css";
import sortOn from "../../assets/sort-on.svg";
import sortOff from "../../assets/sort-off.svg";
import plus from "../../assets/plus.svg";

interface DesktopHeaderProps {
  // Add any props you need for the component here
}

const DesktopHeader = ({}) => {
  const [isSortOn, setIsSortOn] = useState(true);

  const handleSort = () => {
    setIsSortOn(!isSortOn);
  };

  return (
    <div className="desktop-header-container">
      <div className="desktop-header-buttons-container">
        <button>Egyszerű kereső</button>
        <button>Összetett kereső</button>
        <button>Leltárak</button>
        <button>Gyűjtemények</button>
        <button>Szótárak</button>
      </div>
      <div className="desktop-header-search-container">
        <input type="text" placeholder="SOLR alapú" />
        <input type="text" placeholder="Szabadszavas" />
        <button>Keresés</button>
      </div>
      <div className="desktop-numbers-found">
        <h2>Találatok: &nbsp;</h2>
        <h2>123141</h2>
      </div>
      <div className="desktop-header-filter-container">
        <div onClick={handleSort} className="desktop-sort-button">
          {isSortOn ? (
            <img src={sortOn} alt="sort-on" />
          ) : (
            <img src={sortOff} alt="sort-off" />
          )}
        </div>
        <button>Rendezés</button>
        <div className="plus-container">
          <img src={plus} alt="this is a plus" />
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
