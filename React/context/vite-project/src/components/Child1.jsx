import React from "react";

const Child1 = ({ ticketFn }) => {
  return <div className="children">Child1- {ticketFn()}</div>;
};

export default Child1;
