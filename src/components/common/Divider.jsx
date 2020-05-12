import React from "react";
import {Colors} from '../../constants/theme'

const Divider = ({ height = "1px", width = "100%", backgroundColor = Colors.LIGHT_GREY, addtlClass = '' }) => {
  return <div className={addtlClass} style={{...{height, width, backgroundColor}}} />;
};

export default Divider;
