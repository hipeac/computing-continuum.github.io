# Computing Continuum (computing-continuum)

This repository contains the source code for the Computing Continuum website.
Development is done using Vue and the Quasar framework, but the final website is a static site.

## Updating the website

Information about members can be updated in the `src/data` folders.
Related assets can be updated in the `src/assets` folder.

Feel free to open a pull request with your changes.

## Development

### Install Quasar CLI and dependencies

```bash
yarn global add @quasar/cli
yarn
```

### Start the app in development mode

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
```

### Format the files

```bash
yarn format
```

### Build the app for production

Currently we are only exporting the application in SPA mode.

```bash
quasar build
```
