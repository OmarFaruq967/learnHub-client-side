import { useEffect, useState } from "react";
import InstructorCardDetails from "./InstructorCardDetails";
import PopularIns from "./PopularIns";
import Heading from "../../../Shared/Heading/Heading";
import Spinners from "../../../Shared/LoadingSpinners/Spinners";

const InstructorCard = () => {
  const [instructor, setInstructor] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = "https://learn-hub-server-zeta.vercel.app/instructor";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setInstructor(data.slice(0, 6));
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        // Show the Spinner component when loading is true
        <div className=" flex items-center justify-center my-40">
          <Spinners />
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-5 mx-10 my-16">
          {instructor.map((instructors) => (
            <InstructorCardDetails
              key={instructors._id}
              instructors={instructors}
            ></InstructorCardDetails>
          ))}
        </div>
      )}
      <div className=" text-center mb-10">
        <Heading
          subtitle="OUR INSTRUCTORS"
          title="Explore Our Popular Instructors"
        />
      </div>

      {loading ? (
        // Show the Spinner component when loading is true
        <div className=" flex items-center justify-center my-40">
          <Spinners />
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-5 mx-10 my-16">
          {instructor.map((instructors) => (
            <PopularIns
              key={instructors._id}
              instructors={instructors}
            ></PopularIns>
          ))}
        </div>
      )}
    </div>
  );
};

export default InstructorCard;
