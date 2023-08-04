import { test, expect } from '@playwright/test';

test('should have title', async ({ page }) => {
  await page.goto('http://localhost:5001/');

  await expect(page).toHaveTitle('Deportes Hoy');
});
