import React from "react";
export const PlantSize = ({ size }: { size: Array<string> }) => {
  return (
    <>
      <label>Size</label>
      <ul>
        {size.map((size, index) => {
          return <li key={index}>{size}</li>;
        })}
      </ul>
    </>
  );
};
