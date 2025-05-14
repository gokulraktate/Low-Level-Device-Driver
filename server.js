const express = require("express");
const { SerialPort } = require("serialport");
const path = require("path");

const app = express();
const PORT = 3000;

const arduino = new SerialPort({
  path: 'COM11',
  baudRate: 9600,
});

app.use(express.static("public"));

app.get("/on", (req, res) => {
  arduino.write("1");
  res.send("LED Turned ON");
});

app.get("/off", (req, res) => {
  arduino.write("0");
  res.send("LED Turned OFF");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
