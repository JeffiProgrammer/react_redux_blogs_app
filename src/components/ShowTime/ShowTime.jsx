import { parseISO, formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";
const ShowTime = ({ timestamp }) => {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  return (
    <span>
      <i>{timeAgo}</i> &nbsp;
    </span>
  );
};

ShowTime.propTypes = {
  timestamp: PropTypes.string,
};

export default ShowTime;
