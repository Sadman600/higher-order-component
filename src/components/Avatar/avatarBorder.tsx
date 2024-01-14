const avatarBorder = (WrappedComponent) => {
  return (props) => (
    <div
    // style={{ border: "2px solid seagreen", borderRadius: "50%" }}
    >
      <WrappedComponent {...props} />
    </div>
  );
};

export default avatarBorder;
