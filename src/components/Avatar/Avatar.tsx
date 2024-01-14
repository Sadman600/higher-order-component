import AvaterGame from "./AvaterGame";
import avatarBorder from "./avatarBorder";
const UserAvater = avatarBorder(AvaterGame);
const Avatar = () => {
  return (
    <div>
      <AvaterGame imageUrl={"https://i.imgur.com/yXOvdOSs.jpg"} />
      <UserAvater imageUrl={"https://i.imgur.com/yXOvdOSs.jpg"} />
      <AvaterGame imageUrl={"https://i.imgur.com/yXOvdOSs.jpg"} />
      <AvaterGame imageUrl={"https://i.imgur.com/yXOvdOSs.jpg"} />
    </div>
  );
};

export default Avatar;
