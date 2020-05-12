import React from "react";
import { Colors } from "../../constants/theme";

const AlertTemplate = ({ message, options, style, close }) => {
  const getColor = () => {
    switch (options.type) {
      case "info":
        return Colors.PURPLE;
      case "success":
        return Colors.GREEN;
      case "error":
        return Colors.RED;
      default:
        return Colors.PURPLE;
    }
  };
  return (
    <div
      className="alertTemplate"
      style={{ ...style, backgroundColor: getColor() }}
    >
      <span style={{ flex: 2 }}>{message}</span>
      <button className="alertClose" onClick={close}>
        x
      </button>
    </div>
  );
};

export default AlertTemplate;
