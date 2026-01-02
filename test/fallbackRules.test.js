import { describe, it, expect } from "bun:test";
import { fallbackDecision } from "../extension/fallbackRules.js";

describe("fallbackDecision", () => {
  it("returns STOP_WORK after work hours", () => {
    const decision = fallbackDecision({
      signals: { current_time: "20:00" },
      context: { work_hours_end: "18:30" }
    });

    expect(decision.type).toBe("STOP_WORK");
  });
});
