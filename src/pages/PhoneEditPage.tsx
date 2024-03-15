import React from "react";

import Edit from "../edit/Edit";
import { useParams } from "react-router-dom";
import { PhoneHeader } from "../header/PhoneHeader";

interface PhoneEditPageProps {
  data: unknown;
}

const PhoneEditPage = ({ data }) => {
  let { id2 } = useParams();
  const information = data.response.docs.filter((item: any) => item.id === id2);
  return (
    <>
      <PhoneHeader foundNumber={data.response.numFound} />
      <Edit
        slug={information[0].description_str}
        createDate={information[0].createDate_dt}
        country="Oroszorzág"
        city="Moszkva"
        description=""
        backgroundInfo=""
        photographer="Szergej Williams"
        people={["WILLIAMS", "Serena"]}
      />
    </>
  );
};

export default PhoneEditPage;
