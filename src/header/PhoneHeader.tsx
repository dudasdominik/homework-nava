import React, { useState } from "react";
import "./phoneHeader.css";
import polygon from "../assets/polygon.svg";
import burgermenu from "../assets/burger-menu.svg";
import exit from "../assets/exit.svg";

interface PhoneHeaderProps {
  foundNumber: number;
}

export const PhoneHeader = ({ foundNumber }: PhoneHeaderProps) => {
  const [showFilters, setShowFilters] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(true);

  const handleFilterButtonClick = () => {
    setShowFilters(!showFilters);
  };
  const handleBurgerMenuClick = () => {
    setShowBurgerMenu(!showBurgerMenu);
  };

  return (
    <>
      {showBurgerMenu ? (
        <>
          <div
            className="phone-header-container"
            style={showFilters ? { gridTemplateRows: "2fr 1fr" } : {}}
          >
            <div className="burger-menu" onClick={handleBurgerMenuClick}>
              <img src={burgermenu} alt="buger menu" />
            </div>
            <div className="input-container">
              <input type="text" placeholder="SOLR alapú" />
              <input type="text" placeholder="Szabadszavas" />
              <button
                id="filter-button"
                onClick={handleFilterButtonClick}
                style={
                  showFilters
                    ? { backgroundColor: "rgba(133, 173, 123, 1)" }
                    : {}
                }
              >
                Szűrők {<img src={polygon}></img>}
              </button>
            </div>
            <button id="search-button">Keresés</button>
            <section className="results-section">
              <p>Találatok: &nbsp;</p>
              <p>{foundNumber}</p>
            </section>
            {showFilters && (
              <div className="filter-buttons-container">
                <div className="filter-buttons-one">
                  <button>Minden prefix {<img src={polygon}></img>}</button>
                  <button>Minden formátum {<img src={polygon}></img>}</button>
                  <button>Minden típusú {<img src={polygon}></img>}</button>
                </div>
                <div className="filter-buttons-two">
                  <button>Minden dátum {<img src={polygon}></img>}</button>
                  <button>
                    Minden kép listázása {<img src={polygon}></img>}
                  </button>
                  <button>Nincs filter {<img src={polygon}></img>}</button>
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div
            className="phone-header-container"
            style={showFilters ? { gridTemplateRows: "2fr 1fr" } : {}}
          >
            <div className="burger-menu" onClick={handleBurgerMenuClick}>
              <img src={exit} alt="exit" />
            </div>
            <div className="button-container">
              <button>Egyszerű kereső</button>
              <button>Összetett kereső</button>
              <button>Leltárak</button>
              <button>Gyűjtemények</button>
              <button>Szótárak</button>
            </div>
            <section
              className="results-section"
              style={{ justifyContent: "center" }}
            >
              <p>Találatok: &nbsp;</p>
              <p>{foundNumber}</p>
            </section>
          </div>
        </>
      )}
    </>
  );
};
