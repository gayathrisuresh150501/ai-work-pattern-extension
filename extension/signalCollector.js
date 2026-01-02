export async function collectSignals() {
  const idleState = await chrome.idle.queryState(60);
  const now = new Date();

  return {
    idle: idleState === "idle",
    currentTime: now.toTimeString().slice(0, 5)
  };
}
