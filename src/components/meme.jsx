/**
 * Challenge: Save the random meme URL in state
 * - Create new state called `memeImage` with an
 *   empty string as default
 * - When the getMemeImage function is called, update
 *   the `memeImage` state to be the random chosen
 *   image URL
 * - Below the div.form, add an <img /> and set the
 *   src to the new `memeImage` state you created
 */

import React from "react";
import memeData from "../meme-data";

function Meme() {
  const [memeImage, setMemeImage] = React.useState("");

  function getMemeUrl() {
    const memeArr = memeData.data.memes;
    const random = Math.floor(Math.random() * memeArr.length);
    // console.log(memeArr[random].url);
    setMemeImage(memeArr[random].url);
  }
  return (
    <div>
      <div className="inputs">
        <input type="text" placeholder="Top Text" />
        <input type="text" placeholder="Bottom Text" />
        <input
          type="button"
          value="get a new meme image  📷"
          onClick={getMemeUrl}
        />
        <img src={memeImage} alt="" />
      </div>
    </div>
  );
}

export default Meme;
