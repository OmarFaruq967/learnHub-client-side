import React, { useEffect, useState } from "react";
import Classes from "./Classes";
import Heading from "../../Shared/Heading/Heading";
import Spinners from "../../Shared/LoadingSpinners/Spinners";

const AllClasses = () => {
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
        <Heading subtitle="OUR ClASSES" title="Explore Our CLASSES" />
      </div>

      {loading ? (
        // Show the Spinner component when loading is true
        <div className=" flex items-center justify-center my-40">
          <Spinners />
        </div>
      ) : (
        <div className="grid md:grid-cols-4 gap-5 mx-10 my-16">
          {instructor.map((instructors) => (
            <Classes key={instructors._id} instructors={instructors}></Classes>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllClasses;
