import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { KeyboardArrowDown, KeyboardArrowUp, MoreVertOutlined } from '@mui/icons-material';
import "./feature.scss";
import "react-circular-progressbar/dist/styles.css";

const featured = () => {
  return (
    <div className="feature">
      <div className="top">
        <h1 className="title"> Total Revenue</h1>
          <MoreVertOutlined fontSize='small'/>
      </div>
      <div className="bottom">
        <div className="featureChat">
          <CircularProgressbar  value={70} text={"70%"} strokeWidth={5}/>
        </div>
        <p className="title">Total sales made Today</p>
        <p className="amount">$246</p>
        <p className="desc">
        I want to her from you if your role includes automating processes, analysing
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDown fontSize='small'/>
              <div className="resultAmount">$12.4</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUp fontSize='small' />
              <div className="resultAmount">$12.4</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUp fontSize='small'/>
              <div className="resultAmount">$12.4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default featured