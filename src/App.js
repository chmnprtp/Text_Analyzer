import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
function App() {
  // Alert App state

  const [alert, setAlert] = useState(null);
  //  method
  const showsAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Navbar
        title={" Text Analyzer : Your TEXT BUDDY in just one Go"}
        Home="MyHome"
      />
      <Alert alert={alert} />
      <div className="container my-5">
        {/* my-3 upar se neeche aajaega */}
        <TextForm showsAlert={showsAlert} />
      </div>
    </>
  );
}
export default App;
