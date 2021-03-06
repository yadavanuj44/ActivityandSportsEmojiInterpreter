import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "๐ง": "Person Climbing",
  "๐คบ": "Person Fencing",
  "๐": "Horse Racing",
  "๐": "Snowboarding",
  "๐๏ธ": "Person Golfing",
  "๐": "Person Surfing",
  "๐ฃ": "Person Rowing Boat",
  "๐": "Person Swimming",
  "โน๏ธ": "Person Bouncing Ball",
  "๐๏ธ": "Person Lifting Weights",
  "๐ด": "Person Biking",
  "๐คธ": "Person Cartwheeling",
  "๐คผ": "People Wrestling",
  "๐คพ": "Person Playing Handball",
  "๐คน": "Person Juggling",
  "๐": "Trophy",
  "โฝ": "Soccer Ball",
  "โพ": "Baseball",
  "๐ฅ": "Frisbee",
  "๐ณ": "Bowling"
};

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");
  var emojis = Object.keys(emojiDictionary);

  function emojiMeaningHandler(event) {
    var userInput = event.target.value;
    var emojiMeaning = emojiDictionary[userInput];
    if (emojiMeaning === undefined) {
      emojiMeaning = "This emoji is not defined in our database";
    }
    setEmojiMeaning(emojiMeaning);
  }

  function emojiClickHandler(emoji) {
    var emojiMean = emojiDictionary[emoji];
    setEmojiMeaning(emojiMean);
  }

  return (
    <div className="App">
      <h1
        style={{
          maxWidth: "60%",
          display: "block",
          alignContent: "center",
          margin: "2rem auto"
        }}
      >
        Welcome to Activity and Sports Emoji Interpretor
      </h1>
      <input
        placeholder="Enter the Activity emoji you wanna know meaning of"
        onChange={emojiMeaningHandler}
      ></input>
      <div style={{ fontSize: "2rem", padding: "0.5rem" }}>{emojiMeaning}</div>
      <h2>Activity emojis we know</h2>
      <div
        style={{
          maxWidth: "50%",
          display: "block",
          alignContent: "center",
          margin: "auto"
        }}
      >
        {emojis.map(function (item) {
          return (
            <span
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
              key={item}
              onClick={() => emojiClickHandler(item)}
            >
              {item}
            </span>
          );
        })}
      </div>

      <div></div>
    </div>
  );
}
