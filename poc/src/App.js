import React from "react";
// import Login from "./components/Login/Login";
import Todo from "./components/Todo/Todo";

import "./components/styles.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">Login Form</header> */}
      <div id="content">
        {/* <Login /> */}
        <Todo />
      </div>
    </div>
  );
}

export default App;
