import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useInstructor from "../../../Hooks/useInstructor";
import useClasses from "../../../Hooks/useClasses";
import Heading from "../../Shared/Heading/Heading";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const { instructor } = useInstructor;
  const [classes, refetch] = useClasses();

  const [myClasses, setMyClasses] = useState([]);
  const [control, setControl] = useState(false);

  // const handleDelete = (id) => {
  //     console.log(id);
  //     fetch(`https://learn-hub-server-zeta.vercel.app/remove/${id}`, {
  //       method: "DELETE",
  //       headers: { "Content-Type": "application/json" },
  //     })
  //       .then((res) => res.json())
  //       .then((result) => {
  //         if (result?.deletedCount > 0) {
  //           alert('Toy deleted successfully')
  //           setControl(!control);
  //         }
  //       });
  //   };

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `"https://learn-hub-server-zeta.vercel.app/classes/${item._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="w-[90%] mx-auto">
      <div className="text-center font-bold text-xl">
        {" "}
        My classes: {classes?.length || 0}
      </div>
      <div className=" w-[90%] mx-2">
        <div className="text-center mb-10">
          <Heading subtitle="YOUR CART ITEMs" title="Explore your cart items" />
        </div>

        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th className="font-semibold">#</th>
                <th className="font-semibold">Course</th>
                <th className="font-semibold">Course Name</th>
                <th className="font-semibold">Price</th>
                <th className="font-semibold">Remove</th>
                <th className="font-semibold ">Update</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((item, index) => (
                <tr key={item._id}>
                  <td className="font-semibold">{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="font-semibold">{item.type}</td>
                  <td className="font-semibold">${item.price}</td>

                  <td>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-ghost bg-red-600  text-white"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                  <td>
                    <Link to="/dashboard/update">
                      <button className="btn btn-warning btn-sm items-center ">
                        Update
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
              {/* <tr className="mt-10">
              <td></td>
              <td></td>
              <td className="mt-5 text-lg font-bold">
                Total Items: {cart.length}
              </td>
              <td className="text-lg font-bold">Total Price: ${total}</td>
              <td>
                <Link to="/dashboard/payment">
                  <button className="btn btn-warning btn-sm ">PAY NOW</button>
                </Link>
              </td>
            </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;
