import { useEffect, useState } from "react";

const useUserData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const getData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      setIsLoading(false);
      setData(data?.users);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { isLoading, error, data };
};

export default useUserData;
