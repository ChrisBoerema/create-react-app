import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import {
  powerOn,
  channelPlus,
  channelMinus,
  volumePlus,
  volumeMinus,
  tvDisplay,
} from "./functions";

function App() {
  return (
    <body>
      <center>
        <h1>TV Remote</h1>
        <div>
          <Button
            onClick={() => {
              powerOn();
            }}
            variant="contained"
            color="secondary"
          >
            Power On
          </Button>
        </div>
        <div>
          <Button
            onClick={() => {
              channelPlus();
            }}
            variant="contained"
            color="primary"
          >
            Channel +
          </Button>
          <Button
            onClick={() => {
              channelMinus();
            }}
            variant="contained"
            color="primary"
          >
            Channel -
          </Button>
        </div>
        <div>
          <Button
            onClick={() => {
              volumePlus();
            }}
            variant="contained"
            color="primary"
          >
            Volume +
          </Button>
          <Button
            onClick={() => {
              volumeMinus();
            }}
            variant="contained"
            color="primary"
          >
            Volume -
          </Button>
        </div>
        <code>tvDisplay()</code>
      </center>
    </body>
  );
}

export default App;
