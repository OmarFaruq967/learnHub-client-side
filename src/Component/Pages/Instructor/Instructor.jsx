import React from "react";

const Instructor = ({ instructors }) => {
  const {
    instructorName,
    instructorPhoto,
    email,
    type,
    image,
    availableSeats,
    price,
    description,
  } = instructors;
  return (
    <div>
        
      <div className="card  bg-base-100 shadow-xl relative">
        <figure>
          <img
            className="h-[200px] w-[100%]"
            src={instructorPhoto}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="font-bold text-xl text-center">
            <span className="text-[#fbbd23]">{instructorName}</span>
          </h2>
          <h2 className="font-medium text-center">
            <span className="">{email}</span>
          </h2>

          <div className=""></div>
          <div className="text-center">
            <button className=" btn rounded-full bg-[#fbbd23] hover:bg-[#ec7210]">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
