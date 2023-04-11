import express from "express";
import {} from "dotenv/config";
import clientMQTT, { addTopic } from "./mqtt.js";
import { createAddEvent } from "./createAddEvent.js";
import getData from "./getData.js";
import updateData from "./updateData.js";

const app = express();

const device_id = process.env.device_id;
const password = "12345678";

app.listen(5000, () => {
  console.log(`start server at port: ${5000}`);
});

clientMQTT.on("connect", () => {
  // createAddEvent(device_id,password);
  getData(device_id, password);
  // updateData(device_id, password, {
  //   battery: 95,
  //   coordinates: {
  //     latitude: 9.779349,
  //     longitude: 105.6189045,
  //   },
  //   humi: 24,
  //   optic: 21,
  //   temp: 32,
  //   rain: true,
  //   grid_status: true,
  // });
});
addTopic(`device/${device_id}`, (payload) => {
  console.log(JSON.parse(payload));
});
