#!/usr/bin/env node

const yargs = require("yargs");
const axios = require("axios");
const got = require("got");
const terminalImage = require("./terminal-img");

const apiURL = "https://dog.ceo/api/breeds/image/random";

yargs
  .usage("Usage: $0")
  .help("h")
  .alias("h", "help")
  .alias("v", "version").argv;

async function fetchDog() {
  const response = await axios.get(apiURL);

  if (!response) {
    console.error("Oh no ! Could not fetch a dog... Try again.");
    return;
  }

  const { message: imageUrl } = response.data;

  (async () => {
    const { body } = await got(imageUrl, { encoding: null });
    console.log(
      await terminalImage.buffer(body, { width: "50%", height: "50%" }),
    );
  })();
}

fetchDog();
