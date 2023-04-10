// 🧩User navigates to the URL where the app is running 🍏
// 🧩User types a username/name into the "Name" input 🍏
// 🧩Input should now contain the name they've entered 🍏
// 🧩User types a tweet into the "Tweet" text area 🍏
// 🧩Text area should now contain the tweet they've entered 🍏
// 🧩User clicks on the "Send tweet!" button 🍏
// 🧩Both the input and text area should have been cleared, and a new entry should have been added to the list 🍏

import { test, expect } from "@playwright/test";

test("basic test", async ({ page }) => {
  await page.goto("http://localhost:3000");
  const title = page.locator("h1");
  await expect(title).toHaveText("TestTer 🐦");
});

test("user run through test", async ({ page }) => {
  // User navigates to the URL where the app is running
  await page.goto("http://localhost:3000");

  // Find the name input field and type a name
  const nameInput = page.locator('input[name="tweeter"]');
  await nameInput.type("Leo Tolstoy");
  // Check if the typed value is correct
  const inputName = await nameInput.inputValue();
  expect(inputName).toBe("Leo Tolstoy");

  // Locate the Tweet text area and type a tweet
  const tweetText = page.locator('textarea[name="tweet"]');
  await tweetText.type("Anna Karenina should be required reading!");

  // Check if the typed value is correct
  const inputTweet = await tweetText.inputValue();
  expect(inputTweet).toBe("Anna Karenina should be required reading!");

  // Locate the 'Send tweet!' button and click it
  const sendTweetButton = page.locator("#add-tweet-section button");
  await sendTweetButton.click();

  // Wait for the new tweet to be added to the list
  await page.waitForSelector("li");

  // Check if both input and text area are cleared
  const inputClearValue = await nameInput.inputValue();
  expect(inputClearValue).toBe("");
  const textAreaClearValue = await tweetText.inputValue();
  expect(textAreaClearValue).toBe("");

  // Check if the new tweet is added to the list
  const lastEntry = page.locator("#tweets-list li:last-child");
  const lastEntryText = await lastEntry.textContent();
  expect(lastEntryText).toContain("Leo Tolstoy");
  expect(lastEntryText).toContain("Anna Karenina should be required reading!");
});
