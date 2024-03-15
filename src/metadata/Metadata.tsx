import React from "react";
import MetadataDetails from "./components/MetadataDetails";
import exit from "../assets/exit.svg";
import "./metadata.css";
import { Link } from "react-router-dom";

interface MetadataProps {
  id: string;
  fileName: string;
  collection: string;
  riport: string;
  technicalData: string;
  originalPicNumber: string;
  masterFormat: string;
  metadataSet: string;
  lastModified: string;
}

const Metadata = ({
  id,
  fileName,
  collection,
  riport,
  technicalData,
  originalPicNumber,
  masterFormat,
  metadataSet,
  lastModified,
}: MetadataProps) => {
  return (
    <>
      <div className="metadata-details-container">
        <div className="exit-container">
          <h1>Metaadatok:</h1>
          <Link to={"/"}>
            <img src={exit} alt="" />
          </Link>
        </div>
        <MetadataDetails detailName="Azonosító" detailValue={id} />
        <MetadataDetails detailName="File név" detailValue={fileName} />
        <MetadataDetails detailName="Gyűjtemény" detailValue={collection} />
        <MetadataDetails detailName="Riport" detailValue={riport} />
        <MetadataDetails
          detailName="Technikai infó"
          detailValue={technicalData}
        />
        <MetadataDetails
          detailName="Eredeti képszám:"
          detailValue={originalPicNumber}
        />
        <MetadataDetails
          detailName="Master format"
          detailValue={masterFormat}
        />
        <MetadataDetails detailName="Metadata set" detailValue={metadataSet} />
        <MetadataDetails
          detailName="Utolsó módosítás"
          detailValue={lastModified}
        />
        <div className="edit-button-container">
          <Link to={`/edit/${id}`}>
            <button className="edit-button">Szerkesztés</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Metadata;
