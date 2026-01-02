export function showNotification(decision) {
  chrome.notifications.create({
    type: "basic",
    iconUrl: "icon.png",
    title: decision.type.replace("_", " "),
    message: decision.message
  });
}
