import React, { useEffect, useState } from 'react';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import './custom.css';

const CircleChart = () => {
  const [load, setLoad] = useState(false);
  const [percentage, setPercentage] = useState(21);
  const [bgColor, setBgColor] = useState('rgba(108, 117, 125, 81)');

  const handleChange = () => {
    setLoad(!load);
  };

  useEffect(() => {
    load ? setPercentage(70) : setPercentage(21);
    load
      ? setBgColor('rgba(62, 152, 199, 100)')
      : setBgColor('rgba(108, 117, 125, 81)');
  }, [load]);

  return (
    <div className="row my-5">
      <div className="col-md-4 offset-md-4">
        <CircularProgressbarWithChildren
          value={percentage}
          styles={buildStyles({
            textSize: '16px',
            pathTransitionDuration: 0.5,
            pathColor: bgColor,
          })}
          strokeWidth={12}
        >
          <div className="text-center">
            <p className="fw-bold m-0 h3">{`${percentage}%`}</p>
            <p className="fw-bold m-0 small">Quality Air</p>
          </div>
        </CircularProgressbarWithChildren>
        <div className="mt-5 text-center">
          <button className="btn btn-primary" onClick={handleChange}>
            Change Velocity
          </button>
        </div>
      </div>
    </div>
  );
};

export default CircleChart;
