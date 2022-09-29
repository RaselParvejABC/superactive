const breakDurationKey = "break-duration";
const selectedIDsKey = "selected-ids";

const setBreakDuration = (breakDuration) => {
  localStorage.setItem(breakDurationKey, breakDuration);
};

const getBreakDuration = () => {
  return localStorage.getItem(breakDurationKey) || 0;
};



const getSelection = () => {
  const unparsedSelectedIDs = localStorage.getItem(selectedIDsKey) || "{}";
  return JSON.parse(unparsedSelectedIDs);
};

const setSelection = (selectedIDs) => {
  localStorage.setItem(selectedIDsKey, JSON.stringify(selectedIDs));
};

export {
  setBreakDuration,
  getBreakDuration,
  getSelection as getSelectionFromStorage,
  setSelection as setSelectionToStorage,
};
