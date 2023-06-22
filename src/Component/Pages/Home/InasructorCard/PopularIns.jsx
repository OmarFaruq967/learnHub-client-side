import React from 'react';

const PopularIns = ({instructors}) => {
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
              <img className="h-[220px] w-[100%]" src={instructorPhoto} alt="Shoes" />
            </figure>
            {/* <div className="absolute mt-[190px] ml-6 ">
              <div class="avatar-group -space-x-6">
                <div class="avatar">
                  <div class="w-12">
                    <img src={instructorPhoto} />
                  </div>
                </div>
              </div>
            </div> */}
            <div className="card-body">
              <h2 className="font-semibold">Name:{" "} 
                <span className="text-[#fbbd23]">{instructorName}</span>
              </h2>
              <h2 className="font-semibold">Email:{" "}
                <span className="text-[#fbbd23]">{email}</span>
              </h2>
            
              <div className="">
              </div>
              <div className="card-actions justify-end">
                <button className="btn rounded-full bg-[#fbbd23] hover:bg-[#ec7210]">View Details</button>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default PopularIns;