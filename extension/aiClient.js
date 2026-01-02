const ENDPOINT = "http://localhost:8080/v1/analyze";

export async function requestDecision(payload) {
  try {
    const res = await fetch(ENDPOINT, {
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
