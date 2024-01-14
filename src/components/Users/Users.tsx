import UserProfile from "./UserProfile";
import useUserData from "../../hook/useUserData";

const Users = () => {
  const { data, isLoading, error } = useUserData();
  const props = {
    isLoading,
    error,
    data,
  };

  return (
    <>
      <UserProfile {...props} />
    </>
  );
};

export default Users;
