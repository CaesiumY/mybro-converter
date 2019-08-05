chrome.storage.sync.get(null, result => {
  alert(result.value);
});
