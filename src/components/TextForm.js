import React, { useState } from "react";

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
    const message = text; // Use the 'text' state directly here
    Speech.lang = "en"; // Correct the language code to 'en' for English
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
  // it will clear the text only 1 time using react state
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
        <div className="marquee-container">
          <marquee behavior="scroll" direction="left" className="marquee-text">
            <strong>
              To perform Various task in you text like : Listen the text ,
              Remove special Characters in your text , Uppercase , Lowercase ,
              Analyze the timing of reading the text and many more
            </strong>
          </marquee>
        </div>
        <textarea
          className="form-control"
          // hooks
          value={text}
          onChange={handleOnChange}
          // hooks
          id="exampleFormControlTextarea1"
          rows={8}
          defaultValue={""}
        />
      </div>

      <div className="container">
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          ConvertToUppercase
        </button>

        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          ConvertToLowercase
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
          Remove Special Character
        </button>
      </div>

      <div className="conatiner">
        <h1>Your Text Summary</h1>       
        {/* 1 min we can read 125 words so , 1 word =0.008 min
         */}
        {/* split" " will differ it with space = 1 word*/}
        <p>
          {

            // we defined filter to remove that extra element in array
            // split(/\s+/ ) take enter also new line, and space
            //  it is a reg expression 
            text.split(/\s+/).filter((arr_element) => {
              return arr_element.length !== 0
            }).length}
            
            {" "}
          words and {text.length} characters
        </p>

        <p>{0.008 * text.split(" ").filter((element)=>{
          return element.length!==0}).length}
        Minutes you can read</p>
        <h2>PREVIEW</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
