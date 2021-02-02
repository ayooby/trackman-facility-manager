import { getDataFromLocalStorage, makePromise } from "./utils";

const FACILITY_KEY = "facilityList";

export const getFacilityList = () => {
  const facilityList = getDataFromLocalStorage(FACILITY_KEY) || [];
  return makePromise(facilityList);
};

export const getFacilityById = ({ id }) => {
  const savedFacilities = getDataFromLocalStorage(FACILITY_KEY);
  const facility = savedFacilities.find((item) => item.id === id);
  return makePromise(facility);
};
