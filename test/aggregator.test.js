import { describe, it, expect } from "bun:test";
import { buildSummary } from "../extension/aggregator.js";

describe("buildSummary", () => {
  it("builds correct summary", () => {
    const result = buildSummary({
      idle: false,
      currentTime: "20:15"
    });

    expect(result.signals.current_time).toBe("20:15");
    expect(result.context.work_hours_end).toBe("18:30");
  });
});
