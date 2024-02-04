import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const parent1 = ({ parkInfo }) => {
  return (
    <>
      <div className="parent">
        Parent1 : {parkInfo.rollerCoaster} {parkInfo.waterSlide}
      </div>
      <Child1 ticketFn={parkInfo.ticketForRollerCoaster} />
      <Child2 ticketFn={parkInfo.ticketforWaterSlide} />
    </>
  );
};

export default parent1;
