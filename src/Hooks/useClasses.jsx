import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Component/Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useClasses = () => {
  const { user } = useContext(AuthContext);

  const { refetch, data: classes = [] } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://learn-hub-server-zeta.vercel.app/classes?email=${user?.email}`
      );
      return res.json();
    },
  });

  return [classes, refetch];
};

export default useClasses;
