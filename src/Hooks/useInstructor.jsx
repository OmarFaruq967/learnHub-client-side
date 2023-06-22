import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useInstructor = () => {
  const { user } = useAuth();
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://learn-hub-server-zeta.vercel.app/users/instructor/${user?.email}`
      );
      const data = await res.json();
      return data.instructor;
    },
  });
  return isInstructor;
};

export default useInstructor;
