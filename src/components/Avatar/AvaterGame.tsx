import "./avaterGame.css";

const AvaterGame = ({ imageUrl }) => {
  return (
    <div className="avatarContainer">
      <img className="avatar" src={imageUrl} />
    </div>
  );
};

export default AvaterGame;
