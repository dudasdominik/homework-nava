import React from "react";
import "./desktopsidebar.css";
import DesktopSortingCard from "./DesktopSortingCard";
import DesktopHeader from "./DesktopHeader";
import Row from "./Row";

const DesktopSideBar = () => {
  return (
    <div className="desktop-sidebar-container">
      <div className="desktop-sorting-cards-container">
        <DesktopSortingCard />
        <DesktopSortingCard />
        <DesktopSortingCard />
        <DesktopSortingCard />
      </div>
    </div>
  );
};

export default DesktopSideBar;
