import { Page, Locator, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    // Use name attributes if available for more stable selectors
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
  }

  async goto() {
    await this.page.goto("/web/index.php/auth/login");
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await Promise.all([
      this.page.waitForLoadState("networkidle"),
      this.loginButton.click(),
    ]);
  }

  async expectLoginPageVisible() {
    await expect(this.loginButton).toBeVisible();
  }
}
