import clientMQTT from "./mqtt.js";

const getData = async (device_id, password) => {
  clientMQTT.publish(
    "deviceGetData",
    JSON.stringify({
      device_id,
      password,
    })
  );
};

export default getData;
