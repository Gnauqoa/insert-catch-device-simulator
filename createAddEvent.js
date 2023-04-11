import clientMQTT from "./mqtt.js";

const createAddEvent = async (device_id, password) => {
  clientMQTT.publish(
    "deviceCreateAddEvent",
    JSON.stringify({
      device_id,
      password,
    })
  );
};

export { createAddEvent };
