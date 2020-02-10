import React from "react";
import Form from "./components/Form";
import "./App.css";
import ResumeView from "./components/ResumeView";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Prepare getting job!</h1>
      </header>
      <Form />
      <ResumeView />
    </div>
  );
}

export default App;
