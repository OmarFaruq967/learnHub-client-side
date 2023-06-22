import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useAdmin = () => {
  const { user } = useAuth();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://learn-hub-server-zeta.vercel.app/users/admin/${user?.email}`
      );
      const data = await res.json();
      return data.admin;
    },
  });
  return isAdmin; // Return only the isAdmin value
};

export default useAdmin;
