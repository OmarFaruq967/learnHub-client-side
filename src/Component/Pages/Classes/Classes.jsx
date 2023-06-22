import React from 'react';

const Classes = ({instructors}) => {
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
          <img className="h-[220px] w-[100%]" src={image} alt="Shoes" />
        </figure>
        <div className="absolute mt-[190px] ml-6 ">
          <div class="avatar-group -space-x-6">
            <div class="avatar">
              <div class="w-12">
                <img src={instructorPhoto} />
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <h2 className="">
            <span className="text-[#fbbd23]">{instructorName}</span>
          </h2>
          <h2 className="text-lg font-bold text-center text-[#fbbd23] my-2">{type} Language</h2>
          <div className="">
            <div>
              <h2 className="">
                Price:{" "}
                <span className="font-bold text-[#fbbd23]">${price}</span>
              </h2>
            </div>
            <div>
              <h2 className="">
                Available Seats:{" "}
                <span className="font-bold text-[#fbbd23]">
                  {availableSeats}
                </span>
              </h2>
            </div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn rounded-full bg-[#fbbd23] hover:bg-[#ec7210]">Buy Now</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Classes;