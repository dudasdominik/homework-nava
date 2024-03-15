import React from "react";
import DesktopHeader from "./DesktopHeader";
import DesktopSideBar from "./DesktopSideBar";
import Row from "./Row";

interface DesktopMainPageProps {
  data: unknown;
}

const DesktopMainPage = ({ data }: DesktopMainPageProps) => {
  return (
    <>
      <DesktopHeader />
      <div className="desktop-container">
        <Row />
        <DesktopSideBar />
      </div>
    </>
  );
};

export default DesktopMainPage;
