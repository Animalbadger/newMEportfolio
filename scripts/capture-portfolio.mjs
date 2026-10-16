import { chromium } from "playwright-core";
import { copyFileSync, mkdirSync } from "fs";

const outDirs = [
  "/cursor/stores/self/media",
  "/opt/cursor/artifacts/screenshots",
];
for (const d of outDirs) mkdirSync(d, { recursive: true });

const browser = await chromium.launch({
  executablePath: "/usr/local/bin/google-chrome",
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu"],
});

async function shot(page, name) {
  const path = `/tmp/portfolio-shots/${name}`;
  await page.screenshot({ path, fullPage: false });
  for (const d of outDirs) copyFileSync(path, `${d}/${name}`);
  console.log("saved", name);
}

mkdirSync("/tmp/portfolio-shots", { recursive: true });

const desktop = await browser.newPage({
  viewport: { width: 1440, height: 900 },
});
await desktop.goto("http://127.0.0.1:4327/", {
  waitUntil: "domcontentloaded",
  timeout: 30000,
});
await desktop.waitForTimeout(1200);
await shot(desktop, "zaid-portfolio-hero-desktop.png");

await desktop.evaluate(() =>
  document.querySelector("#projects")?.scrollIntoView(),
);
await desktop.waitForTimeout(500);
const first = desktop.locator("#projects button[aria-expanded]").first();
if (await first.count()) {
  await first.click();
  await desktop.waitForTimeout(400);
}
await shot(desktop, "zaid-portfolio-projects-desktop.png");

await desktop.evaluate(() =>
  document.querySelector("#skills")?.scrollIntoView(),
);
await desktop.waitForTimeout(350);
await shot(desktop, "zaid-portfolio-skills-desktop.png");

await desktop.evaluate(() =>
  document.querySelector("#contact")?.scrollIntoView(),
);
await desktop.waitForTimeout(350);
await shot(desktop, "zaid-portfolio-contact-desktop.png");
await desktop.close();

const mobile = await browser.newPage({
  viewport: { width: 390, height: 844 },
});
await mobile.goto("http://127.0.0.1:4327/", {
  waitUntil: "domcontentloaded",
  timeout: 30000,
});
await mobile.waitForTimeout(1200);
await shot(mobile, "zaid-portfolio-hero-mobile.png");
await mobile.evaluate(() =>
  document.querySelector("#projects")?.scrollIntoView(),
);
await mobile.waitForTimeout(500);
await shot(mobile, "zaid-portfolio-projects-mobile.png");
await mobile.close();

await browser.close();
console.log("done");
