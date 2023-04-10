import { test, expect } from "@playwright/test";

test("basic test", async ({ page }) => {
  await page.goto("http://localhost:3000");
  const title = page.locator("h1");
  await expect(title).toHaveText("TestTer 🐦");
});

test("user types a name into the 'Name' input field", async ({ page }) => {
  await page.goto("http://localhost:3000");

  // Locate the 'Name' input field
  const nameInput = page.locator('input[name="tweeter"]');

  // Type a name into the input field
  await nameInput.type("Leo Tolstoy");

  // Check if the typed value is correct
  const inputValue = await nameInput.inputValue();
  expect(inputValue).toBe("Leo Tolstoy");
});

//test("user types a tweet into the 'Tweet' text area", async ({ page }) => {
//   await page.goto("http://localhost:3000");

//   // Locate the 'Tweet' text area
//   const tweetTextArea = page.locator('textarea[name="tweet"]');

//   // Type a tweet into the text area
//   await tweetTextArea.type("Anna Karenina should be required reading!");

//   // Check if the typed value is correct
//   const inputValue = await tweetTextArea.inputValue();
//   await expect(inputValue).toBe("Anna Karenina should be required reading!");
// });

// // test("user clicks on the 'Send tweet!' button", async ({ page }) => {
// //   await page.goto("http://localhost:3000");

// //   //   // Locate the 'Name' input field and type a name
// //   const nameInput = page.locator('input[name="tweeter"]');
// //   await nameInput.type("Leo Tolstoy");

// //   //   // Locate the 'Tweet' text area and type a tweet
// //   const tweetTextArea = page.locator('textarea[name="tweet"]');
// //   await tweetTextArea.type("Anna Karenina should be required reading!");

// //   // Locate the 'Send tweet!' button and click it
// //   const sendTweetButton = page.locator("#add-tweet-section button");
// //   await sendTweetButton.click();
// //});
