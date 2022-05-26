const getSumOfObjProperties = (obj) =>
  Object.values(obj).reduce((prev, curr) => prev + curr);

const getSummedValueOfDevice = (device) => {
  return device.x + device.y;
};

const getClosestNetworkStationIndex = (
  device,
  summedValuesOfNetworkStationsArray
) => {
  const summedDevice = getSummedValueOfDevice(device);
  // return index of closest value to summedValue in summedValuesOfNetworkStations
  const value = summedValuesOfNetworkStationsArray.reduce((prev, curr) => {
    return Math.abs(curr - summedDevice) < Math.abs(prev - summedDevice)
      ? curr
      : prev;
  });

  return summedValuesOfNetworkStationsArray.indexOf(value);
};

const getClosestNetworkStation = (
  device,
  summedValuesOfNetworkStationsArray,
  networkStationsArray
) =>
  networkStationsArray[
    getClosestNetworkStationIndex(device, summedValuesOfNetworkStationsArray)
  ];

// D² = x² + y²
const getCalculatedCoordination = (device, closesStation) => ({
  x: Math.pow(closesStation.x - device.x, 2),
  y: Math.pow(closesStation.y - device.y, 2),
});

module.exports = {
  getSumOfObjProperties,
  getSummedValueOfDevice,
  getClosestNetworkStationIndex,
  getClosestNetworkStation,
  getCalculatedCoordination,
};
