import React, { Component } from "react";
import "./Toggle.scss";

export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {currentDateTime:new Date().toDateString()};
  }
  
  render() {
    const { selected, toggleSelected } = this.props;
    return (
      <div>
        <div className="toggle-container" onClick={toggleSelected}>
          <div className={`dialog-button ${selected ? "" : "disabled"}`}>
          </div>
        </div>
        <div className="date">{selected ? this.state.currentDateTime : ""}</div>
      </div>
    );
  }
}
