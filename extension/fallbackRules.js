export function fallbackDecision(summary) {
  if (summary.signals.current_time > summary.context.work_hours_end) {
    return {
      type: "STOP_WORK",
      message: "You've been working past hours. Time to log off."
    };
  }
  return null;
}
