let CURRENT_SWITCH = false;

function executeCode() {
  chrome.tabs.executeScript(
    {
      code: 'document.body.innerHTML = document.body.innerHTML.replace(/호/g, "메");',
    },
    result => {}
  );
}

function getStorage() {
  chrome.storage.sync.get(null, result => {
    if (result.value) {
      CURRENT_SWITCH = result.value;

      executeCode();
    }
  });
}

function myListener(tabId, changeInfo, tab) {
  getStorage();
  if (changeInfo.status === 'complete' && CURRENT_SWITCH === 'true') {
    executeCode();
  }
}

getStorage();
chrome.tabs.onUpdated.addListener(myListener);
