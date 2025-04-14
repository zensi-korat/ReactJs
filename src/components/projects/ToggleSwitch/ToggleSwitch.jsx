import "./ToggleSwitch.css";
import { useState } from "react";
function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const handleToggleClick = () => {
    setIsOn(!isOn);
  };

  const switchStyle = isOn ? "on" : "off";
  return (
    <div
      className="toggle-switch"
      onClick={handleToggleClick}
      style={{ backgroundColor: isOn ? "#4caf50" : "#f44336" }}
      //   className={`toggle-switch ${isOn ? "on" : "off"}`}
    >
      <div className={`switch ${switchStyle}`}>
        <span className="switch-inner">{switchStyle}</span>
      </div>
    </div>
  );
}

export default ToggleSwitch;
