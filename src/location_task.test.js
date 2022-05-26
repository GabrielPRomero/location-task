const { networkStations, devices } = require("./data.js");
const {
  getSumOfObjProperties,
  getSummedValueOfDevice,
  getClosestNetworkStationIndex,
  getClosestNetworkStation,
  getCalculatedDistance,
} = require("./utils.js");

test("returns summed values of network station properties are correct", () => {
  expect(getSumOfObjProperties(networkStations[0])).toBe(9);
  expect(getSumOfObjProperties(networkStations[1])).toBe(46);
  expect(getSumOfObjProperties(networkStations[2])).toBe(22);
  expect(getSumOfObjProperties(networkStations[3])).toBe(23);
  expect(getSumOfObjProperties(networkStations[4])).toBe(126);
});

test("returns summed device´s x and y values", () => {
  expect(getSummedValueOfDevice(devices[0])).toBe(0);
  expect(getSummedValueOfDevice(devices[1])).toBe(200);
  expect(getSummedValueOfDevice(devices[2])).toBe(25);
  expect(getSummedValueOfDevice(devices[3])).toBe(36);
  expect(getSummedValueOfDevice(devices[4])).toBe(26);
  expect(getSummedValueOfDevice(devices[5])).toBe(124);
});

test("returns index of closest network station", () => {
  const summedValuesOfNetworkStations = networkStations.map((station) => {
    return getSumOfObjProperties(station);
  });

  expect(
    getClosestNetworkStationIndex(devices[0], summedValuesOfNetworkStations)
  ).toBe(0);
  expect(
    getClosestNetworkStationIndex(devices[1], summedValuesOfNetworkStations)
  ).toBe(4);
  expect(
    getClosestNetworkStationIndex(devices[2], summedValuesOfNetworkStations)
  ).toBe(3);
  expect(
    getClosestNetworkStationIndex(devices[3], summedValuesOfNetworkStations)
  ).toBe(1);
  expect(
    getClosestNetworkStationIndex(devices[4], summedValuesOfNetworkStations)
  ).toBe(3);
  expect(
    getClosestNetworkStationIndex(devices[5], summedValuesOfNetworkStations)
  ).toBe(4);
});

test("returns closest network station", () => {
  const summedValuesOfNetworkStations = networkStations.map((station) => {
    return getSumOfObjProperties(station);
  });

  expect(
    getClosestNetworkStation(
      devices[0],
      summedValuesOfNetworkStations,
      networkStations
    )
  ).toEqual(networkStations[0]);
  expect(
    getClosestNetworkStation(
      devices[1],
      summedValuesOfNetworkStations,
      networkStations
    )
  ).toEqual(networkStations[4]);
  expect(
    getClosestNetworkStation(
      devices[2],
      summedValuesOfNetworkStations,
      networkStations
    )
  ).toEqual(networkStations[3]);
  expect(
    getClosestNetworkStation(
      devices[3],
      summedValuesOfNetworkStations,
      networkStations
    )
  ).toEqual(networkStations[1]);
  expect(
    getClosestNetworkStation(
      devices[4],
      summedValuesOfNetworkStations,
      networkStations
    )
  ).toEqual(networkStations[3]);
  expect(
    getClosestNetworkStation(
      devices[5],
      summedValuesOfNetworkStations,
      networkStations
    )
  ).toEqual(networkStations[4]);
});

test("returns calculated distance", () => {
  expect(getCalculatedDistance(devices[0], networkStations[0])).toEqual({
    x: 0,
    y: 0,
  });
  expect(getCalculatedDistance(devices[1], networkStations[4])).toEqual({
    x: 1,
    y: 5625,
  });
  expect(getCalculatedDistance(devices[2], networkStations[3])).toEqual({
    x: 100,
    y: 25,
  });
  expect(getCalculatedDistance(devices[3], networkStations[1])).toEqual({
    x: 4,
    y: 4,
  });
  expect(getCalculatedDistance(devices[4], networkStations[3])).toEqual({
    x: 64,
    y: 64,
  });
  expect(getCalculatedDistance(devices[5], networkStations[4])).toEqual({
    x: 5476,
    y: 5476,
  });
});
