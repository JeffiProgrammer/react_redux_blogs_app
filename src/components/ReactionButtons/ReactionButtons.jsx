import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { reactionAdded } from "../../redux/reducers/blogs/blogsSlice";
const reactionEmoji = {
  thumbsUp: "👍",
  hooray: "🎉",
  heart: "❤️",
  rocket: "🚀",
  eyes: "👀",
};

const ReactionButtons = ({ blog }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(
    ([name, emoji], index) => {
      return (
        <button
          key={index}
          onClick={() => {
            dispatch(reactionAdded({ blogId: blog.id, reactionName: name }));
          }}
          className="back-button reactionButton"
        >
          {emoji} {blog.reaction[name]}
        </button>
      );
    }
  );

  return <div>{reactionButtons}</div>;
};

ReactionButtons.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default ReactionButtons;
