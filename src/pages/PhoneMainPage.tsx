import React from "react";
import { PhoneHeader } from "../header/PhoneHeader";
import { Card } from "../Card/Card";
import picture from "../assets/picture.png";

interface PhoneMainPageProps {
  data: unknown;
}

const PhoneMainPage = ({ data }: PhoneMainPageProps) => {
  console.log(data);
  return (
    <>
      <PhoneHeader foundNumber={data.response.numFound} />
      <div className="cards-container">
        {data.response.docs.map((card: any, index: number) => (
          <Card
            key={index}
            picture={picture}
            formatSize={card.bitdepth_i}
            cDate={card.createDate_dt}
            mDate={card.harvestDate_dt}
            id1={card.filename_str}
            id2={card.id}
            size1={card.ow_i}
            size2={card.oh_i}
            riport={card.description_str}
            sessId={card.coll_str}
            format={card.format_str}
          />
        ))}
      </div>
    </>
  );
};

export default PhoneMainPage;
