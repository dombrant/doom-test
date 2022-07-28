# DOOM Test

## Synopsis

A CLI that checks if the size of a bundle is smaller than the 1993 video game [DOOM](<https://en.wikipedia.org/wiki/Doom_(1993_video_game)>) (2.39 MB). While this library can be used as a serious tool for checking that a website's bundle size is not too large, this project was made primarily for fun. A target 2.39 MB does not necessarily fit every type of website.

## Installation

Install with `npm install https://github.com/dombrant/doom-test`, or clone the repo and run `npm link`.

## Usage

```bash
$ doom-test <path>
```

Call `doom-test` from the command line, with the option to pass an argument of the relative path to your bundle/dist folder. If no arguments are passed, it by default will look for a folder named `dist` in the directory it is called from.

## Contributors

**Dominic Brant**.
If you have any thoughts/suggestions/problems, feel free to open an issue.

## Learn More

- [The web is Doom by Ronan Cremin:](https://mobiforge.com/research-analysis/the-web-is-doom) the original inspiration for this library.

- [bundlesize:](https://github.com/siddharthkp/bundlesize) a more feature-rich library that logs bundle sizes.

- [bundlephobia:](https://bundlephobia.com/) a website and CLI that provides a quick lookup on the size of npm modules.

## License

MIT© [Dominic Brant](https://dombrant.com)
