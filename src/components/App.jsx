import React from "react";
import Nav from "./Navbar/Nav";
import SideBar from "./SideBar/SideBar";
import Footer from "./footer/Footer";
import Uploader from "./Upload/Uploader";

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  return (
    <div
      className={darkMode ? "dark-mode" : "light-mode"}
      style={{ height: "100%", position: "absolute", width: "100%" }}
    >
      <Nav />
      <div className="toggle-container">
        <span style={{ color: darkMode ? "grey" : "#FFD700" }}>☀︎</span>
        <span className="toggle">
          <input
            checked={darkMode}
            onChange={() => setDarkMode(prevMode => !prevMode)}
            type="checkbox"
            className="checkbox"
            id="checkbox"
          />
          <label htmlFor="checkbox" />
        </span>
        <span style={{ color: darkMode ? "slateblue" : "grey" }}>☾</span>
      </div>
      <SideBar />
      <h1>Age Related Macular Degeneration Diagnosis</h1>
      <ol className="instructions">
        <li>Upload a retinal image</li>
        <li>Click submit</li>
        <li>
          You've done your part, and now it's time for our trained ML model to
          do its job
        </li>
        <li>
          The assessment will reveal whether (ARMD) was detected by displaying
          either YES or NO
        </li>
      </ol>
      <Footer />
      <Uploader />
    </div>
  );
}

export default App;
