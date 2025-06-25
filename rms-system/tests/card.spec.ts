import { test, expect } from "@playwright/test";

test("Card component", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  const card = page.locator('[data-testid="Nebula"]');
  await expect(card).toBeVisible();
});
