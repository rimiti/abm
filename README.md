# abm

[![MIT License][license-badge]][license]
[![PRs Welcome][prs-badge]][prs]

## Description

Adblock modal blocker.

## Install

```
$ yarn add @rimiti/abm
```

## Demo

<!-- ![Example](https://github.com/rimiti/abm/blob/master/demo/demo.png) -->
<img src="https://github.com/rimiti/abm/blob/master/demo/demo.png" height="550">

## How it works?

1. Add these rows into the *head* block:

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@rimiti/abm@latest/dist/index.js"></script>
<link rel="stylesheet" media="all"  href="https://cdn.jsdelivr.net/npm/@rimiti/abm@latest/dist/style.css" />

```

2. Add this HTML block into the *body*:

```html
<div id="abm">
  <div class="abm-position">
    <div class="abm-container">
      <h3 class="abm-title">Adblock detected</h3>
      <p class="abm-text">Please, <strong>turn off</strong> your ad blocker in order to continue browsing.</p>
      <a class="abm-reload" onclick="window.location.reload()" href="#">Refresh the page</a>
    </div>
  </div>
</div>
```


## Scripts

Run using yarn <script> command.

    clean - remove temporary files
    build - compile source files
    build:dev - compile source files for development

## License

MIT © [Dimitri DO BAIRRO](https://github.com/rimiti/abm/blob/master/LICENSE)

[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license]: https://github.com/rimiti/abm/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
