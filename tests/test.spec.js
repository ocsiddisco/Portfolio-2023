import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://celine-le-corvaisier.vercel.app/");

  // main buttons
  const downloadPromise = page.waitForEvent("download");
  await page.locator("html").click();
  const download = await downloadPromise;

  const EmailPopup3Promise = page.waitForEvent("popup");
  await page.getByRole("button", { name: "Get in touch" }).click();
  const EmailPopup3 = await EmailPopup3Promise;
  await page.locator("div").filter({ hasText: "Long version" }).nth(3).click();

  //   Projects

  const GithubProjectPage = page.waitForEvent("popup");
  for (const element of await page.getByAltText("github").all()) {
    await element.click();
  }
  const OpenGithubProject = await GithubProjectPage;

  const DemoProjectPage = page.waitForEvent("popup");
  for (const element of await page.locator('button:has-text("Demo")').all()) {
    await element.click();
  }
  const OpenDemoProject = await DemoProjectPage;

  // Contact me bottom page
  const EmailPopup1Promise = page.waitForEvent("popup");
  await page.getByRole("button", { name: "Contact Me" }).click();
  const EmailPopup1 = await EmailPopup1Promise;

  // Nav Bar
  const GithubPagePromise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "go to github" }).click();
  const GithubPage = await GithubPagePromise;

  const LinkedinPagePromise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "go to linkedin" }).click();
  const LinkedinPage = await LinkedinPagePromise;

  const EmailPopup2Promise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "send email" }).click();
  const EmailPopup2 = await EmailPopup2Promise;
});
