import React from "react";
import "./style.scss";

const Icon = (props) => {
  const { icon, filled, className = "" } = props;
  const name = `icon-${icon}${filled ? "_filled" : ""}`;
  return <i className={`${name} ${className}`} />;
};

export default Icon;
