import React, { useEffect, useState } from "react";
import Instructor from "./Instructor";
import Heading from "../../Shared/Heading/Heading";
import Spinners from "../../Shared/LoadingSpinners/Spinners";

const AllInstructor = () => {
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

  return (
    <div>
      <div className="text-center my-10">
        <Heading subtitle="OUR INSTRUCTORS" title="Explore Our Instructors" />
      </div>

      {loading ? (
        // Show the Spinner component when loading is true
        <div className=" flex items-center justify-center my-40">
          <Spinners />
        </div>
      ) : (
        <div className="grid md:grid-cols-4 gap-5 mx-10 my-16">
          {instructor.map((instructors) => (
            <Instructor
              key={instructors._id}
              instructors={instructors}
            ></Instructor>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllInstructor;
