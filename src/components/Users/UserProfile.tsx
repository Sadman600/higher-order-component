import styles from "./UserProfile.module.css";

const UserProfile = ({ isLoading, error, data }) => {
  if (isLoading && !error) {
    return (
      <>
        <p>Loading........</p>
      </>
    );
  }
  return (
    <>
      {data.map((user, i) => (
        <div key={i} className={styles.avater}>
          <img src={user?.image} />
        </div>
      ))}
    </>
  );
};

export default UserProfile;
