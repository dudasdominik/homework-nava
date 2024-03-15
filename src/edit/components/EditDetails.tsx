import React, { ChangeEvent } from "react";

interface EditDetailsProps {
  label: string;
  text: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const EditDetails = ({ label, text, onChange }: EditDetailsProps) => {
  return (
    <div className="edit-detail-container">
      <h1>{label}</h1>
      <div className="text-container">
        <textarea defaultValue={text} onChange={onChange} />
      </div>
    </div>
  );
};

export default EditDetails;
