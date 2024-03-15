import React, { useState } from "react";
import cardOn from "../../assets/card-sort-on.svg";
import cardOff from "../../assets/card-sort-off.svg";
import desktopx from "../../assets/desktop-x.svg";
import "./desktopsortingcard.css";

interface DesktopSortingCardProps {
  // Define the props for the component here
}

const DesktopSortingCard: React.FC<DesktopSortingCardProps> = () => {
  // Implement the component logic here
  const [isSortOn, setIsSortOn] = useState(true);
  const handleClick = () => {
    setIsSortOn(!isSortOn);
  };

  return (
    <div className="desktop-sorting-card-container">
      <div className="desktop-sorting-card">
        <div className="desktop-sorting-card-status" onClick={handleClick}>
          {isSortOn ? (
            <img src={cardOn} alt="sort-on" />
          ) : (
            <img src={cardOff} alt="sort-off" />
          )}
        </div>
        <div className="desktop-sorting-card-x">
          <img src={desktopx} alt="desktop-x" />
        </div>
      </div>
      <div className="desktop-sorting-details">
        <div className="desktop-sort-name">
          <h3> Dátum</h3>
        </div>
        <h3>&nbsp; alapján &nbsp;</h3>
        <div className="desktop-sort-value">
          <h3>10 évnél idősebb</h3>
        </div>
      </div>
    </div>
  );
};

export default DesktopSortingCard;
