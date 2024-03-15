import React, { ChangeEvent, useState } from "react";
import exit from "../assets/exit.svg";
import EditDetails from "./components/EditDetails";
import "./edit.css";
import { Link } from "react-router-dom";

interface EditProps {
  slug: string;
  createDate: string;
  country: string;
  city: string;
  description: string;
  backgroundInfo: string;
  photographer: string;
  people: string[];
}

const Edit = ({
  slug,
  createDate,
  country,
  city,
  description,
  backgroundInfo,
  photographer,
  people,
}: EditProps) => {
  const [values, setValues] = useState({
    slug,
    createDate,
    country,
    city,
    description,
    backgroundInfo,
  });

  const handleChange =
    (name: string) => (event: ChangeEvent<HTMLTextAreaElement>) => {
      setValues({
        ...values,
        [name]: event.target.value,
      });
    };

  const handleSave = () => {
    fetch("/api/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="edit-details-container">
        <div className="image-container">
          <Link to={"/"}>
            <img src={exit} alt="this is an exit button" />
          </Link>
        </div>
        <div className="edit-container">
          <EditDetails
            label="Rövidített cím  (slug)"
            text={slug}
            onChange={handleChange("slug")}
          />
          <EditDetails
            label="készítés dátuma"
            text={createDate}
            onChange={handleChange("createDate")}
          />
          <EditDetails
            label="Ország"
            text={country}
            onChange={handleChange("country")}
          />
          <EditDetails
            label="Város"
            text={city}
            onChange={handleChange("city")}
          />
          <EditDetails
            label="Képszöveg"
            text={description}
            onChange={handleChange("description")}
          />
          <EditDetails
            label="Háttérinfó"
            text={backgroundInfo}
            onChange={handleChange("backgroundInfo")}
          />
        </div>
        <div className="other-details">
          <div className="photographer-container">
            <p>Fotós:</p>
            <p>{photographer}</p>
          </div>
          <hr />
          <div className="people-container">
            <p>Személyek:</p>
            {people.map((person, index) => (
              <p key={index}>{person}</p>
            ))}
          </div>
          <hr />
          <div className="bottom-edit-container">
            <div className="akr-codes">
              <section>
                <p>Sport:</p>
                <p>{"(Sport)(Sport)"}</p>
              </section>
              <section>
                <p>Mérkőzés:</p>
                <p>{"(Sportesemény)(Sport)"}</p>
              </section>
              <section>
                <p>Nemzetközi Torna:</p>
                <p>{"(Sportesemény)(Sport)"}</p>
              </section>
              <section>
                <p>Tenisz:</p>
                <p>{"(Tenisz)(Sport)"}</p>
              </section>
              <section>
                <p>Eredmény:</p>
                <p>{"(Eredmény)(Sport)"}</p>
              </section>
            </div>
            <div>
              <button className="save-button" onClick={handleSave}>
                Mentés
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
