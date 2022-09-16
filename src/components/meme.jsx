/**
 * Challenge:
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 * - Don't worry about adding any functionality yet
 */

import React from "react";

function Meme() {
  return (
    <div>
      <form action="">
        <input type="text" placeholder="Top Text" />
        <input type="text" placeholder="Bottom Text" />
        <input type="button" value="get a new meme image  📷" />
      </form>
    </div>
  );
}

export default Meme;
