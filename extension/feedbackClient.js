const FEEDBACK_ENDPOINT = "http://localhost:8080/v1/feedback";

export async function sendFeedback(data) {
  try {
    await fetch(FEEDBACK_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  } catch {}
}
