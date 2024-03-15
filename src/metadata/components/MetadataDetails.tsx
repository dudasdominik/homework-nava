import React from "react";

interface MetadataDetailsProps {
  detailName: string;
  detailValue: unknown;
}

const MetadataDetails = ({ detailName, detailValue }: MetadataDetailsProps) => {
  return (
    <div className="metadata-detail-container">
      <h1>{detailName}</h1>
      <h2>{String(detailValue)}</h2>
    </div>
  );
};

export default MetadataDetails;
