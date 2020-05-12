import React from "react";

const Segment = ({ tabs = [], activeTab, setActiveTab }) => {
  return (
    <ul className="row w-100 justify-content-around">
      {tabs.map((tab, key) => (
        <li
          onClick={() => setActiveTab(tab.value)}
          className={`tabs ${activeTab === tab.value ? "tabActive" : ""}`}
          {...{ key }}
        >
          {tab.label}
        </li>
      ))}
    </ul>
  );
};

export default Segment;
