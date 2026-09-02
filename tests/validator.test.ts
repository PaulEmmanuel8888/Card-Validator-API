import { describe, expect, it } from "vitest";
import { isValidCardNumber } from "../src/validator.js";

describe("isValidCardNumber", () => {
  it("returns true for a valid card number", () => {
    expect(isValidCardNumber("4532015112830366")).toBe(true);
  });

  it("returns false for an invalid card number", () => {
    expect(isValidCardNumber("4532015112830367")).toBe(false);
  });

  it("returns false for a malformed card number", () => {
    expect(isValidCardNumber("hello123")).toBe(false);
  });
});
