const { networkStations, devices } = require("./data.js");
const {
  getSumOfObjProperties,
  getClosestNetworkStation,
  getCalculatedCoordination,
} = require("./utils.js");

const summedValuesOfNetworkStations = networkStations.map((station) => {
  return getSumOfObjProperties(station);
});

devices.map((device) => {
  const closestStation = getClosestNetworkStation(
    device,
    summedValuesOfNetworkStations,
    networkStations
  );
  const calcCoordination = getCalculatedCoordination(device, closestStation);
  const { reach } = closestStation;
  const { x, y } = calcCoordination;
  let speed = 0;
  const deviceDistance = Math.sqrt(x + y);
  const stationCoordination = `${closestStation.x}, ${closestStation.y}`;
  const deviceCoordination = `${device.x}, ${device.y}`;

  if (deviceDistance <= reach) {
    speed = Math.pow(reach - deviceDistance, 2);
  }
  if (speed > 0) {
    const resultText = `Best network station for point ${deviceCoordination} is ${stationCoordination} with speed ${speed}`;
    console.log(resultText);
    return;
  }

  console.log(
    `No network station within reach for point ${deviceCoordination}`
  );
  return;
});
