import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/navbar/navbar";
import Signup from "./components/signup/signup";
import Login from "./components/login/login";
import Segment from "./components/common/Segment";
import {LOGIN_TABS} from './constants/variables'

const App = () => {
  const [activeTab, setActiveTab] = useState("signup"); // login | signup

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="Session">
        <div className="tabContainer d-flex flex-column align-content-center">
          <Segment tabs={LOGIN_TABS} {...{ setActiveTab, activeTab }} />
          {activeTab === "signup" ? <Signup {...{ setActiveTab }} /> : <Login {...{ setActiveTab }} />}
        </div>
      </div>
    </div>
  );
};

export default App;
