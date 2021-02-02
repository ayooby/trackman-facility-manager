export const saveToLocalStorage = (key, data) => {
  const stringifiedData = JSON.stringify(data);
  try {
    window.localStorage.setItem(key, stringifiedData);
  } catch (error) {
    console.error(error);
  }
};

export const getDataFromLocalStorage = (key) => {
  const dataString = window.localStorage.getItem(key);
  try {
    return JSON.parse(dataString);
  } catch {
    return;
  }
};

export const makePromise = (data, delay = 1000) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      data ? resolve(data) : reject("no data");
    }, delay);
  });
