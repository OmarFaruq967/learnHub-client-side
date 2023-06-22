import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const Spinners = () => {
  return (
    <div>
      <ThreeCircles
        height="100"
        width="100"
        color="#ec7210"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};

export default Spinners;
