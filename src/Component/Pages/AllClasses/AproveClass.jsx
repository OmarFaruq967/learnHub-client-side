import React, { useEffect, useState } from "react";
import Heading from "../../Shared/Heading/Heading";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AproveClass = () => {
  const [instructor, setInstructor] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = "https://learn-hub-server-zeta.vercel.app/instructor";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setInstructor(data);
        setLoading(false);
      });
  }, []);

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
        const url = `https://learn-hub-server-zeta.vercel.app/classes/${item._id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              // Remove the deleted item from the instructor array
              const updatedInstructor = instructor.filter(
                (i) => i._id !== item._id
              );
              setInstructor(updatedInstructor);
            }
          });
      }
    });
  };
  // fetch(
  //   `https://learn-hub-server-zeta.vercel.app/classes/${item._id}`,
  //   {
  //     method: "DELETE",
  //   }
  // )
  //   .then((res) => res.json())
  //   .then((data) => {
  //     if (data.deletedCount > 0) {
  //       refetch();
  //       Swal.fire("Deleted!", "Your file has been deleted.", "success");
  //     }
  //   });

  return (
    <div className="w-[95%]">
      <div className="text-center my-10">
        <Heading subtitle="All ClASSES" title="SEE ALL CLASSES" />
      </div>
      <div className="w-[95%]">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Class</th>
                <th>Instructor</th>
                <th>Email</th>
                <th>Seat</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {instructor.map((item, index) => (
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
                  <td className="font-semibold">{item.instructorName}</td>
                  <td className="font-semibold">{item.email}</td>
                  <td className="font-semibold">{item.availableSeats}</td>
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AproveClass;
