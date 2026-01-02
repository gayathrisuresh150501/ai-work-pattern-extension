/**
 * Mock AI Decision Service
 * Simulates responses from the real AI service
 * Used only for local testing
 */

export function mockDecision(summary) {
  const { current_time } = summary.signals;
  const { work_hours_end } = summary.context;

  // Simulate post-work hours decision
  if (current_time > work_hours_end) {
    return {
      type: "STOP_WORK",
      priority: "HIGH",
      message: "You've been working past your usual hours. Time to log off."
    };
  }

  // Simulate break reminder
  if (!summary.signals.idle) {
    return {
      type: "BREAK",
      priority: "MEDIUM",
      message: "You've been working continuously. Take a short break."
    };
  }

  // No action
  return null;
}
