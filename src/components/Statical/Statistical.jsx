import React from 'react'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { Link } from "react-router-dom";

const Statistical = () => {
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
            to="/settings/statistical-groups"
            className="onLink"
            style={{
            marginLeft: "1px",
            color: "black",
            textDecoration: "none",
            textSizeAdjust: "auto",
          }}
        >
          Statistical Groups
        </Link>
      </div>
      <div className="heading">
        <h3>Statistical Groups</h3>
      </div>
    </div>
  )
}

export default Statistical
