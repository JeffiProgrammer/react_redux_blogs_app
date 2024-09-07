import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { selectUserById } from "../../redux/reducers/users/usersSlice";

const ShowAuthor = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, userId));

  return <span>{user ? `by: ${user.fullname}` : "by: Unknown User"}</span>;
};

ShowAuthor.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default ShowAuthor;
