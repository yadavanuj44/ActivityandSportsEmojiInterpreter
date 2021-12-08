import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🏁": "Chequered Flag",
  "🚩": "Triangular Flag",
  "🎌": "Crossed Flags",
  "🏴": "Black Flag",
  "🇦🇫": ""
};

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");
  var emojis = Object.keys(emojiDictionary);

  function emojiMeaningHandler() {}

  function emojiClickHandler(emoji) {}

  return (
    <div className="App">
      <h1>Welcome to Activity and Sports Emoji Interpretor</h1>
      <input onChange={emojiMeaningHandler}></input>
      <h2>Activity emojis we know</h2>
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
  );
}
