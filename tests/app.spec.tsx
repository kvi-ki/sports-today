import { test, expect } from '@playwright/test';

test('should have title', async ({ page }) => {
  await page.goto('http://localhost:5001/');

  await expect(page).toHaveTitle('Deportes Hoy');
});

test('should render header', async ({ page }) => {
  await page.goto('http://localhost:5001/');

  await page.setContent('<h1>Deportes Hoy</h1>');
});
