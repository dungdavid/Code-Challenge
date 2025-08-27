// sumToN.test.js
const { sum_to_n_a, sum_to_n_b, sum_to_n_c } = require("./problem1");

describe("sum_to_n_a", () => {
  test("n = 5 → 15", () => {
    expect(sum_to_n_a(5)).toBe(15);
  });

  test("n = -5 → -15", () => {
    expect(sum_to_n_a(-5)).toBe(-15);
  });

  test("n = 1 → 1", () => {
    expect(sum_to_n_a(1)).toBe(1);
  });

  test("n = -1 → -1", () => {
    expect(sum_to_n_a(-1)).toBe(-1);
  });

  test("n = 0 → 0", () => {
    expect(sum_to_n_a(0)).toBe(0);
  });
});

describe("sum_to_n_b", () => {
  test("n = 5 → 15", () => {
    expect(sum_to_n_b(5)).toBe(15);
  });

  test("n = -5 → -15", () => {
    expect(sum_to_n_b(-5)).toBe(-15);
  });

  test("n = 1 → 1", () => {
    expect(sum_to_n_b(1)).toBe(1);
  });

  test("n = -1 → -1", () => {
    expect(sum_to_n_b(-1)).toBe(-1);
  });

  test("n = 0 → 0", () => {
    expect(sum_to_n_b(0)).toBe(0);
  });
});

describe("sum_to_n_c", () => {
  test("n = 5 → 15", () => {
    expect(sum_to_n_c(5)).toBe(15);
  });

  test("n = -5 → -15", () => {
    expect(sum_to_n_c(-5)).toBe(-15);
  });

  test("n = 1 → 1", () => {
    expect(sum_to_n_c(1)).toBe(1);
  });

  test("n = -1 → -1", () => {
    expect(sum_to_n_c(-1)).toBe(-1);
  });

  test("n = 0 → 0", () => {
    expect(sum_to_n_c(0)).toBe(0);
  });
});
