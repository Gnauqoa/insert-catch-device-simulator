import clientMQTT from "./mqtt.js";

const updateData = async (device_id, password, device_data) => {
  clientMQTT.publish(
    "deviceUpdateData",
    JSON.stringify({
      device_id,
      password,
      device_data,
    })
  );
};

export default updateData;
