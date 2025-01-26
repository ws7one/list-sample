// import { getPeople } from "@/api/people";
// import { People } from "@/types/people";
// import { useQuery } from "@tanstack/react-query";

// export const usePeople = () => {
//   const fetchPeople = async (): Promise<People[]> => {
//     const peopleData = (await getPeople()) as People[];

//     return peopleData;
//   };

//   const result = useQuery({
//     queryKey: ["people"],
//     queryFn: fetchPeople,
//     staleTime: 1000,
//   });
//   return result;
// };

"use client";

import { useState, useEffect } from "react";
import { People } from "@/types/people";
import { getPeople } from "@/api/people";

export const usePeople = () => {
  const [data, setData] = useState<People[] | undefined>(undefined);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const peopleData = await getPeople();
        setData(peopleData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("An error occurred"));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    data,
    error,
    isLoading,
    isError: !!error,
  };
};
