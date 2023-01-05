import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode enable or not?
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert(`Dark Mode has been enabled!`, `success`);
      document.title = "TextUtils - Dark Mode ❤️";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(`Light Mode has been enabled!`, `success`);
      document.title = "TextUtils - Light Mode ☀️";
    }
  };
  const tog = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#121212";
      showAlert(`Special Dark Mode has been enabled!`, `success`);
      document.title = "TextUtils - Dark Mode ❤️";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(`Special Light Mode has been enabled!`, `success`);
      document.title = "TextUtils - Light Mode ☀️";
    }
  };
  return (
    <>
      <Navbar
        title="Text Manipulator 🫀"
        homeText="Home"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
        tog={tog}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          heading="Enter text to manipulate 📝"
          mode={mode}
          showAlert={showAlert}
        />
      </div>
    </>
  );
}

export default App;
