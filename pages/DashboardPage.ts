import { Page, Locator, expect } from "@playwright/test";

export class DashboardPage {
  readonly page: Page;
  readonly header: Locator;
  readonly adminNav: Locator;

  constructor(page: Page) {
    this.page = page;
    // The dashboard has a unique heading text 'Dashboard'
    this.header = page.getByRole("heading", { name: "Dashboard" });
    // 'Admin' menu item in the left navigation
    this.adminNav = page.getByRole("link", { name: "Admin" });
  }

  async expectLoaded() {
    await expect(this.header).toBeVisible();
  }

  async goToAdmin() {
    await this.adminNav.click();
  }
}
