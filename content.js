const STYLE_ID = "gdocs-dark-mode-styles";
const STORAGE_KEY = "darkModeEnabled";

function injectDarkMode() {
  if (document.getElementById(STYLE_ID)) return;
  const link = document.createElement("link");
  link.id = STYLE_ID;
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = chrome.runtime.getURL("styles.css");
  (document.head || document.documentElement).appendChild(link);
}

function removeDarkMode() {
  const el = document.getElementById(STYLE_ID);
  if (el) el.remove();
}

function applyState(enabled) {
  if (enabled) {
    injectDarkMode();
  } else {
    removeDarkMode();
  }
}

chrome.storage.local.get([STORAGE_KEY], (result) => {
  const enabled = result[STORAGE_KEY] !== false; // default ON
  applyState(enabled);
});

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "local" && changes[STORAGE_KEY]) {
    applyState(changes[STORAGE_KEY].newValue);
  }
});
