import { test, expect } from "@playwright/test";

test("Device page components", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await page.click('[data-testid="Nebula"]');
  await expect(page).toHaveURL("http://localhost:5173/device");

  await page.click('[data-testid="toggle-button"]');
  await expect(page.locator('[data-testid="logs-table"]')).toBeVisible();
});
