import React from "react";
import rect from "../../assets/desktop-rect.svg";
import ticked from "../../assets/ticked-rect.svg";
import "./desktoprow.css";

interface RowProps {
  isTicked?: boolean;
  title1?: string;
  title2?: string;
  title3?: string;
  title4?: string;
  title5?: string;
  title6?: string;
  title7?: string;
  title8?: string;
}
const Row = ({
  isTicked,
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  title7,
  title8,
}: RowProps) => {
  return (
    <div className="desktop-row-container">
      <div className="desktop-row-first-item">
        <div>
          <img src={isTicked ? ticked : rect} alt="this is a rectangle" />
        </div>
        <div>
          <h2>{title1}</h2>
        </div>
        <div>
          <h2>{title2}</h2>
        </div>
        <div>
          <h2>{title3}</h2>
        </div>
        <div>
          <h2>{title4}</h2>
        </div>
        <div>
          <h2>{title5}</h2>
        </div>
        <div>
          <h2>{title6}</h2>
        </div>
        <div>
          <h2>{title7}</h2>
        </div>
        <div>
          <h2>{title8}</h2>
        </div>
      </div>
    </div>
  );
};

export default Row;
