import axios from "axios";

const BASE_URL =
  "https://api.thingspeak.com/channels/1548196/feeds.json?api_key=8VXN6UCPDIO3U337&results=1";

const monitoringAxios = axios.create({
  baseURL: BASE_URL,
});

const getDataMonitoring = async () => {
  const result = await monitoringAxios.get(BASE_URL);
  return result.data;
};

export { getDataMonitoring };
