import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { AdminPage } from "../pages/AdminPage";

test("login and navigate to Admin user management", async ({
  page,
  baseURL,
}) => {
  const loginPage = new LoginPage(page);
  const dashboard = new DashboardPage(page);
  const admin = new AdminPage(page);

  await loginPage.goto();
  await loginPage.expectLoginPageVisible();
  await loginPage.login("Admin", "admin123");

  await dashboard.expectLoaded();
  await dashboard.goToAdmin();

  await admin.expectLoaded();
});
