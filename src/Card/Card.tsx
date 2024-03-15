import React from "react";
import { CardDetails } from "./components/CardDetails";
import "./card.css";
import { Link } from "react-router-dom";

interface CardProps {
  formatSize?: string;
  cDate?: string;
  mDate?: string;
  id2?: string;
  size1?: string;
  size2?: string;
  riport?: string;
  sessId?: string;
  id1?: string;
  format?: string;
  picture?: string;
}

export const Card = ({
  formatSize,
  cDate,
  mDate,
  id2,
  size1,
  riport,
  sessId,
  id1,
  format,
  picture,
  size2,
}: CardProps) => {
  formatSize = `(${formatSize} bit)` || "(16 bit)";
  cDate = cDate || "1946-03-22";
  mDate = mDate || "2023-03-19T02:36:57Z";
  id2 = id2 || "667e1096-5968-4ef1-93c7-eb5089cbdcc5";
  const size = `${size1}x${size2}` || "5000x4000";
  riport = riport || "Sztójaiék a népbiróságon";
  sessId = sessId || "P2-20220712";
  id1 = id1 || "AFMAFI46___5750004";
  format = format || "TIFF";

  return (
    <>
      <Link to={`/details/${id2}`}>
        <div className="card-container">
          <div className="picture-container">
            <img src={picture} alt="This is a picture" />
          </div>
          <div className="details-container">
            <CardDetails
              h1={"ID"}
              h2={id1}
              h3={id2}
              isId={true}
              isImportant={true}
            ></CardDetails>
            <CardDetails
              h1={"RIPORT"}
              h2={riport}
              isImportant={true}
            ></CardDetails>
            <CardDetails h1={"SIZE"} h2={size}></CardDetails>
            <CardDetails h1={"CDATE"} h2={cDate}></CardDetails>
            <CardDetails
              h1={"SESSID"}
              h2={sessId}
              isImportant={true}
            ></CardDetails>
            <CardDetails h1={"MDATE"} h2={mDate}></CardDetails>
            <CardDetails
              h1={"FORMAT"}
              h2={format}
              h3={formatSize}
              isId={true}
            ></CardDetails>
          </div>
        </div>
      </Link>
    </>
  );
};
