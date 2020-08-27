var Power = false;
var Channel = 0;
var Volume = 0;

export function powerOn() {
  Power = true;
}

export function channelPlus() {
  Channel = Channel + 1;
}

export function channelMinus() {
  Channel = Channel - 1;
}

export function volumePlus() {
  Volume = Volume + 1;
}

export function volumeMinus() {
  Volume = Volume - 1;
}

export function tvDisplay() {
  var Display = [Power, Channel, Volume];
  return Display;
}
