import { getTweets, createNewTweet } from "./helpers.js";

const form = document.querySelector("#add-tweet-section");
const tweetsList = document.querySelector("#tweets-list");

async function refreshTweets() {
  const data = await getTweets();
  tweetsList.innerHTML = "";
  for (const tweet of data.payload) {
    addTweetToList(tweet);
  }
}

async function handleTweetSubmission(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const extracted = Object.fromEntries(formData);
  const created = await createNewTweet(extracted);
  form.reset();
  console.log("New tweet created", created);
  await refreshTweets();
}

form.addEventListener("submit", handleTweetSubmission);

function addTweetToList(tweet) {
  const li = document.createElement("li");
  const tweeterSpan = document.createElement("span");
  tweeterSpan.textContent = tweet.tweeter;
  tweeterSpan.classList.add("tweeter");
  li.append(tweeterSpan, " ", tweet.tweet);
  tweetsList.appendChild(li);
}

await refreshTweets();
