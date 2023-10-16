import React from "react";
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { Link } from "react-router-dom";
import Searchform from "../Searchform/Searchform";

const Search = () => {
  return (
    <div>
      <div className="path">
        <Link
          to="/"
          style={{
            marginLeft: "10px",
            marginRight: "1px",
            color: "blue",
            textDecoration: "none",
            textSizeAdjust: "auto",
          }}
        >
          Home
        </Link>
        <span>
          <ChevronRightOutlinedIcon fontSize="small" />
        </span>
        <Link
            to="/settings"
            className="onLink"
            style={{
            marginLeft: "1px",
            color: "black",
            textDecoration: "none",
            textSizeAdjust: "auto",
          }}
        >
          Settings
        </Link>

        <span>
          <ChevronRightOutlinedIcon fontSize="small" />
        </span>
        <Link
            to="/settings/search"
            className="onLink"
            style={{
            marginLeft: "1px",
            color: "black",
            textDecoration: "none",
            textSizeAdjust: "auto",
          }}
        >
          Search
        </Link>
      </div>
      <div className="form">
        <Searchform/>
      </div>
    </div>
  );
};

export default Search;
