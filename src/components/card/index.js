import React from "react";
import SinglePurchaseCardComponent from "./SinglePurchaseCardComponent";
import SecondPurchaseCardComponent from "./SecondPurchaseCardComponent";

const CardComponent = ({ data, handleClick }) => {
  const secondPurchase = data?.secondPurchase;
  return secondPurchase ? (
    <SecondPurchaseCardComponent data={data} />
  ) : (
    <SinglePurchaseCardComponent data={data} handleClick={handleClick} />
  );
};

export default CardComponent;
