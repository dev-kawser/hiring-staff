import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TinnyHeading = ({ title, path, pathName }) => {
  return (
    <div className="flex items-center gap-3">
      <h4>{title}</h4>
      <span>|</span>
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/Dashboard"}>Dashboard</Link>
          </li>
          <li>
            <Link to={`/Dashboard/${path}`}>{pathName}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

TinnyHeading.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  pathName: PropTypes.string.isRequired,
};

export default TinnyHeading;
