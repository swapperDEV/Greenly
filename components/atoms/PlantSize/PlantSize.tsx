import React from "react";
export const PlantSize = ({ size }: { size: Array<string> }) => {
  return (
    <>
      <p>Size</p>
      <ul>
        {size.map((size) => {
          return <li>{size}</li>;
        })}
      </ul>
    </>
  );
};
