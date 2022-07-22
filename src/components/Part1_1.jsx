import React, { useState } from "react";

function Part1_1() {
  const [number, setNumber] = useState("");

  function onHandleClick() {

    let txt = ""
    for (let i = 0; i < Math.floor( number / 2 ); i++) {
        txt += "<p>"
      for (let j = 0; j <= i*2; j++) {
        txt += "*"
      }
      txt += "</p>"
    }
    const display = document.getElementById("display");
    display.innerHTML = txt;

    setNumber("")
  }

  return (
    <div>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => onHandleClick()}>Submit</button>
      <div id="display" style={{ textAlign: 'center' }}>
      </div>
    </div>
  );
}

export default Part1_1;
