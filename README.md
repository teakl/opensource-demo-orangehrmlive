Playwright TypeScript POM example

Folder structure

- pages/: Page Object Model classes (LoginPage, DashboardPage, AdminPage)
- tests/: Playwright tests using the POM classes

Run locally

1. Install deps

```bash
npm install
npx playwright install
```

2. Run tests

```bash
npm test
```

Open HTML report

```bash
npm run test:report
```
