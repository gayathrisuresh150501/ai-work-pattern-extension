export function buildSummary(signals) {
  return {
    signals: {
      idle: signals.idle,
      current_time: signals.currentTime
    },
    context: {
      work_hours_end: "18:30"
    }
  };
}
