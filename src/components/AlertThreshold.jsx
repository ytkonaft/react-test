import React from "react";

const AlertThreshold = ({ onChange }) => {
  const handleInputChanged = ({ currentTarget }) => {
    onChange(currentTarget.value);
  };

  return (
    <div>
      <input type="number" onChange={handleInputChanged} />
    </div>
  );
};

export default AlertThreshold;
