import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🧗": "Person Climbing",
  "🤺": "Person Fencing",
  "🏇": "Horse Racing",
  "🏂": "Snowboarding",
  "🏌️": "Person Golfing",
  "🏄": "Person Surfing",
  "🚣": "Person Rowing Boat",
  "🏊": "Person Swimming",
  "⛹️": "Person Bouncing Ball",
  "🏋️": "Person Lifting Weights",
  "🚴": "Person Biking",
  "🤸": "Person Cartwheeling",
  "🤼": "People Wrestling",
  "🤾": "Person Playing Handball",
  "🤹": "Person Juggling",
  "🏆": "Trophy",
  "⚽": "Soccer Ball",
  "⚾": "Baseball",
  "🥏": "Frisbee",
  "🎳": "Bowling"
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
