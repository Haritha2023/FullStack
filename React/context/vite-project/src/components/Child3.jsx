import React from "react";
import { useContext } from "react";
import { ParkContext } from "./ParkContext";

const Child3 = () => {
  let rulesAndTickets = useContext(ParkContext);
  console.log("Child3 ->", rulesAndTickets);
  return (
    <div className="children">
      Child3- {rulesAndTickets.ticketForMerryGoRound()}
    </div>
  );
};

export default Child3;
