import React from "react";
import { PhoneHeader } from "../header/PhoneHeader";
import Metadata from "../metadata/Metadata";
import { useParams } from "react-router-dom";

interface PhoneMetadataPageProps {
  data: unknown;
}

const PhoneMetadataPage = ({ data }) => {
  let { id2 } = useParams();
  const information = data.response.docs.filter((item: any) => item.id === id2);
  console.log(information);
  return (
    <>
      <PhoneHeader foundNumber={data.response.numFound} />
      <Metadata
        id={id2}
        foundNumber={data.response.numFound}
        fileName={information[0].filename_str}
        collection={information[0].coll_str}
        riport={information[0].description_str}
        technicalData={""}
        originalPicNumber={""}
        masterFormat={information[0].format_str}
        metadataSet={information[0].premid_str}
        lastModified={information[0].harvestDate_dt}
      />
    </>
  );
};

export default PhoneMetadataPage;
