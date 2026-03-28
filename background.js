const STORAGE_KEY = "darkModeEnabled";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get([STORAGE_KEY], (result) => {
    if (result[STORAGE_KEY] === undefined) {
      chrome.storage.local.set({ [STORAGE_KEY]: true });
    }
  });
});
