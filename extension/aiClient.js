import { mockDecision } from "./mockAiService.js";

const USE_MOCK_AI = true; // Update to false when real AI is ready
const AI_ENDPOINT = "http://localhost:8080/v1/analyze";

export async function requestDecision(payload) {
  if (USE_MOCK_AI) {
    return mockDecision(payload);
  }

  try {
    const res = await fetch(AI_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!res.ok) return null;
    return (await res.json()).decision ?? null;
  } catch {
    return null;
  }
}
