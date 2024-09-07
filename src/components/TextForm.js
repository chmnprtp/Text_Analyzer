import React, { useState } from "react";
import "./TextForm.css"; // Import the CSS file for styling

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showsAlert("Converted to Upper Case", "Success");
  };

  const handleLoClick = () => {
    console.log("Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showsAlert("Converted to Lower Case", "Success");
  };

  const handleClClick = () => {
    console.log("Clicked" + text);
    let newText = "";
    props.showsAlert("All text Cleared", "Success");
    setText(newText);
  };

  const handleSpClick = () => {
    const Speech = new SpeechSynthesisUtterance();
    const message = text;
    Speech.lang = "en";
    Speech.text = message;
    window.speechSynthesis.speak(Speech);
    props.showsAlert("Translating", "Success");
  };

  const handleRSClick = () => {
    let newText = text.replace(/[^a-zA-Z ]/g, "");
    props.showsAlert("All Special characters are removed", "Success");
    setText(newText);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showsAlert("Text Copied to Clipboard", "Success");
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const [cleared, setCleared] = useState(false);

  const handleTextClick = () => {
    if (!cleared) {
      let newText = "";
      setText(newText);
      setCleared(true);
    }
  };

  const [text, setText] = useState("*****Enter your text here*****");

  return (
    <>
      <h1 className="text-center">ENTER YOUR TEXT BELOW</h1>
      <div
        className="border border-dark border-4 p-3"
        onClick={handleTextClick}
      >
        <div className="scrolling-container">
          <div className="scrolling-text">
            <strong>
              To perform various tasks on your text like: Listen to the text, Remove special characters, Convert to Uppercase, Lowercase, Analyze the timing of reading the text, and many more.
            </strong>
          </div>
        </div>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows={8}
          defaultValue={""}
        />
      </div>

      <div className="container">
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleSpClick}>
          Listen
        </button>
        <button className="btn btn-primary my-2 my-1" onClick={handleRSClick}>
          Remove Special Characters
        </button>
      </div>

      <div className="container">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(/\s+/).filter((arr_element) => arr_element.length !== 0).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element) => element.length !== 0).length} minutes you can read</p>
        <h2>PREVIEW</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
