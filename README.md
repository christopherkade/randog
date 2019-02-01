# random + dog = randog

Fetch and display a picture of a random dog right in your terminal.

## Installation

`npm install -g @christopherkade/randog`

Or, if you just want a quick look without installing it:

`npx @christopherkade/randog`

## Usage

```
$ randog --help

  Usage
    $ randog
    $ randog --breed="breed name"

  Examples
    $ randog
    $ randog --breed="shiba"
```

## Screenshot

<p align="center">
  <img height="400" src="https://user-images.githubusercontent.com/15229355/52140931-72676d80-2654-11e9-8ea1-1ee6feee2e8c.png">
</p>

## Why?

Why not?

## Packages used

- A fork of [terminal-img](https://github.com/sindresorhus/terminal-image) - To display pictures in the terminal
- [yargs](https://www.npmjs.com/package/yargs) - To simplify the CLI creation
- [axios](https://www.npmjs.com/package/axios) - The fetch the pictures via an API

---

Currently only supported by iTerm >=3
