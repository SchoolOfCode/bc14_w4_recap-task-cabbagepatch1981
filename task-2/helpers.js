//----------------
//The code below is replicating an API - we'll learn how to code a back end properly soon!

const tweets = [
  { tweeter: "JestFan2022", tweet: "How good is Jest?" },
  {
    tweeter: "Playwright4Lyfe",
    tweet: "@JestFan2022 Yeah, but can it do everything that Playwright does?",
  },
  {
    tweeter: "SuperTester",
    tweet: "*laughs in back end API testing* ...You'll meet me soon!",
  },
];

export async function getTweets() {
  return { payload: tweets };
}

export async function createNewTweet(tweet) {
  tweets.push(tweet);
  return { payload: tweet };
}
