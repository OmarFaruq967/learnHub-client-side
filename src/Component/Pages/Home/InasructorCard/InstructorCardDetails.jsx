import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../../../../Hooks/useCart";
import { useLocation, useNavigate } from "react-router-dom";

const InstructorCardDetails = ({ instructors }) => {
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

  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (instructors) => {
    console.log(instructors);
    if (user && user.email) {
      const cartItem = {
        courseItemId: instructors._id,
        type,
        image,
        price,
        email: user.email,
      };
      fetch("https://learn-hub-server-zeta.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); // refetch cart to update the number of items in the cart
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Course added on the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to Book a Class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
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
          <h2 className="text-lg font-bold text-center text-[#fbbd23] my-5">
            {type} Language
          </h2>
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
            <button
              onClick={() => handleAddToCart(instructors)}
              className="btn rounded-full bg-[#fbbd23] hover:bg-[#ec7210]"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCardDetails;
