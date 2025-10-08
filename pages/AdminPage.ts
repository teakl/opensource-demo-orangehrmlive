import { Page, Locator, expect } from "@playwright/test";

export class AdminPage {
  readonly page: Page;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    // Admin -> User Management heading
    this.heading = page.getByRole("heading", { name: "System Users" });
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
  }
}
