const { test, expect } = require("@jest/globals");
const {
  variableTest,
  numberOperations,
  arrayTest,
  objectTest,
  stringTest,
} = require("./javascript-giris");

// 1. Değişken Tanımlama Testi
test("var, let ve const değişkenleri doğru tanımlanmalı", () => {
  const vars = variableTest();
  expect(vars.x).toBe(10);
  expect(vars.y).toBe(20);
  expect(vars.z).toBe(30);
});

// 2. Sayısal İşlemler Testi
test("Sayısal işlemler doğru çalışmalı", () => {
  const nums = numberOperations();
  expect(nums.a).toBe(10);
  expect(nums.b).toBe(20);
  expect(nums.c).toBe(20);
});

// 3. Dizi İşlemleri Testi
test("Dizi işlemleri doğru çalışmalı", () => {
  expect(arrayTest()).toEqual([2, 3, 4, 5, 6]);
});

// 4. Nesne İşlemleri Testi
test("Nesne işlemleri doğru çalışmalı", () => {
  expect(objectTest()).toEqual({ name: "Ali", city: "İstanbul" });
});

// 5. String İşlemleri Testi
test("String işlemleri doğru çalışmalı", () => {
  const result = stringTest();
  expect(result.upper).toBe("JAVASCRIPT");
  expect(result.lower).toBe("javascript");
});
