const getFacilityListFromStorage = () => {
  return window.localStorage.getItem("facilityList") || [];
};

const saveFacilityToLocalStorage = (newFacility) => {
  const oldFacilities = getFacilityListFromStorage();
  window.localStorage.setItem("facilityList", [newFacility, ...oldFacilities]);
};

export const getFacilityList = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve(getFacilityListFromStorage()), 1000)
  );

export const getFacilityById = ({ id }) => {
  const savedFacilities = getFacilityListFromStorage();
  const facility = savedFacilities.find((item) => item.id === id);
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      facility ? resolve(facility) : reject("Facility not found");
    }, 1000)
  );
};
