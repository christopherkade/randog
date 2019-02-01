#!/usr/bin/env node

const Yargs = require("yargs");
const axios = require("axios");
const got = require("got");
const terminalImage = require("./terminal-img");

const argv = Yargs.usage("Usage: $0")
  .help("h")
  .alias("h", "help")
  .alias("v", "version")
  .option("b", {
    describe: "Display a specific breed",
    type: "string",
    nargs: 1,
    requiresArg: true,
  })
  .alias("b", "breed").argv;

async function fetchDog() {
  let apiURL = "https://dog.ceo/api/breeds/image/random";
  const option = argv.b ? true : false;

  // If breed option is specified
  if (option) {
    const breed = argv.b;
    apiURL = `https://dog.ceo/api/breed/${breed}/images/random`;
  }

  try {
    const response = await axios.get(apiURL);
    const { message: imageUrl } = response.data;

    (async () => {
      const { body } = await got(imageUrl, { encoding: null });
      console.log(
        await terminalImage.buffer(body, { width: "50%", height: "50%" }),
      );
    })();
  } catch (Error) {
    // An error occured during the fetch
    option
      ? console.error("Dog breed not found!")
      : console.error("Oh no ! Could not fetch a dog... Try again.");
    return;
  }
}

fetchDog();
