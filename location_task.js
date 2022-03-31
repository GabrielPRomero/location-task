// speed = (reach - devices distance from network station ) ^ 2
// if distance > reach, speed = 0

const networkStations = [
  { x: 0, y: 0, reach: 9 },
  { x: 20, y: 20, reach: 6 },
  { x: 10, y: 0, reach: 12 },
  { x: 5, y: 5, reach: 13 },
  { x: 99, y: 25, reach: 2 },
];

const devices = [
  { x: 0, y: 0 },
  { x: 100, y: 100 },
  { x: 15, y: 10 },
  { x: 18, y: 18 },
  { x: 13, y: 13 },
  { x: 25, y: 99 },
];

const summedValuesOfNetworkStations = networkStations.map((station) => {
  return station.x + station.y + station.reach;
});

const getSummedValueOfDevice = (device) => {
  return device.x + device.y;
};

const closestStationIndex = (device) => {
  const summedDevice = getSummedValueOfDevice(device);
  // return index of closest value to summedValue in summedValuesOfNetworkStations
  const value = summedValuesOfNetworkStations.reduce((prev, curr) => {
    return Math.abs(curr - summedDevice) < Math.abs(prev - summedDevice)
      ? curr
      : prev;
  });

  return summedValuesOfNetworkStations.indexOf(value);
};

const getClosestStation = (device) =>
  networkStations[closestStationIndex(device)];

// D² = x² + y²
const getCalc = (device, closesStation) => ({
  x: Math.pow(closesStation.x - device.x, 2),
  y: Math.pow(closesStation.y - device.y, 2),
});

devices.map((device) => {
  const closestStation = getClosestStation(device);
  const calcCoordination = getCalc(device, closestStation);
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
