import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const ShowAuthor = ({ userId }) => {
  const user = useSelector((state) =>
    state.users.users.find((user) => user.id === userId)
  );

  return <span>{user ? `by: ${user.fullname}` : "by: Unknown User"}</span>;
};

ShowAuthor.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default ShowAuthor;
