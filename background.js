chrome.runtime.onInstalled.addListener(() => {
  console.log("Coding Challenges Extension installed.");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "logMessage") {
    console.log(message.content);
  }
});
