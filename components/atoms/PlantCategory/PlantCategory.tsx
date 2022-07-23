import React from "react";
export const PlantCategory = ({
  categories,
}: {
  categories: Array<string>;
}) => {
  return (
    <>
      <div>
        <label>Categories</label>
        <ul>
          {categories.map((category, index) => {
            return <li key={index}>{category}</li>;
          })}
        </ul>
      </div>
    </>
  );
};
