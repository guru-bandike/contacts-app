import './Avatar.css';

const Avatar = ({ size, contact, fontSize, marginTop }) => {
  return (
    <span
      className="avatar"
      style={{
        maxWidth: size,
        minWidth: size,
        maxHeight: size,
        minHeight: size,
        fontSize,
        marginTop,
      }}
    >
      <img
        src={`https://avatar.iran.liara.run/public/${contact.id}`}
        alt="avatar"
        onLoad={(e) => e.target.classList.add('fade-in')}
      />
    </span>
  );
};

export default Avatar;
