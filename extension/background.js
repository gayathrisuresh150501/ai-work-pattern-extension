import { collectSignals } from "./signalCollector.js";

const signals = await collectSignals();
console.log(signals);

const ALARM = "DECISION_CYCLE";

chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create(ALARM, { periodInMinutes: 15 });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === ALARM) {
    console.log("Decision cycle triggered");
  }
});
