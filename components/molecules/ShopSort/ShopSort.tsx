import React from "react";
export const ShopSort = () => {
  const sort = "Default";
  return (
    <div>
      <ul>
        <li>All Plants</li>
        <li>Sale</li>
      </ul>

      <p>Sort by: {sort} -</p>
    </div>
  );
};
