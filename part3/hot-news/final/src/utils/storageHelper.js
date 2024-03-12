export const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const appendLocalStorage = (key, data) => {
  const dataArr = getLocalStorage(key);
  if (!dataArr) {
    setLocalStorage(key, [data]);
    return;
  }

  dataArr.push(data);

  setLocalStorage(key, dataArr);
};
