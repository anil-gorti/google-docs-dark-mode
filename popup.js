const STORAGE_KEY = "darkModeEnabled";
const toggle = document.getElementById("toggle");
const status = document.getElementById("status");

chrome.storage.local.get([STORAGE_KEY], (result) => {
  const enabled = result[STORAGE_KEY] !== false;
  toggle.checked = enabled;
  updateStatus(enabled);
});

toggle.addEventListener("change", () => {
  const enabled = toggle.checked;
  chrome.storage.local.set({ [STORAGE_KEY]: enabled });
  updateStatus(enabled);
});

function updateStatus(enabled) {
  status.textContent = enabled
    ? "Active on docs.google.com"
    : "Dark mode is off";
}
