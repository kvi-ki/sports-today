import { test } from '@playwright/test';

test('should render header', async ({ page }) => {
  await page.goto('http://localhost:5001/');

  await page.setContent('<h1>Deportes Hoy</h1>');
});
