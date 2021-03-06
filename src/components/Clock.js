import React, { useState } from "react";
import "./Clock.css";
import CurTime from "./CurTime";
import Toggle from "./Toggle";

const Clock = () => {
  const [selected, setSelected] = useState(false);

  return (
    <div className="Clk">
      <div className="top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-clock"
          viewBox="0 0 16 16"
        >
          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
        </svg>
        &nbsp;Digital Clock
      </div>
      <div className="togg">
        <Toggle
          selected={selected}
          toggleSelected={() => {
            setSelected(!selected);
          }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          fill="currentColor"
          className="bi bi-calendar"
          viewBox="0 0 16 16"
        >
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
        </svg>
      </div>
      <div className="mid"><div className="popo"><CurTime/></div>
      </div>
      </div>
  );
};

export default Clock;
