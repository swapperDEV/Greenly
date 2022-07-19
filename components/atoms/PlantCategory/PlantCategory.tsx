import React from "react";
export const PlantCategory = ({
  categories,
}: {
  categories: Array<string>;
}) => {
  return (
    <>
      <div>
        <p>Categories</p>
        <ul>
          {categories.map((category) => {
            return <li>{category}</li>;
          })}
        </ul>
      </div>
    </>
  );
};
