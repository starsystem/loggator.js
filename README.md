# loggator.js
Login on GitHub pages with personal token

## Usage

The script manage login button/form/dialogs and expose `logged` variable which return `false` (logged out) or the personal token (logged in).

**Include**

- [`assets/javascript/loggator.js`](assets/javascript/loggator.js) – Script (defer to access DOM)
- [`_includes/templates/loggator.html`](_includes/templates/loggator.html) – HTML templates (form, login button, dialogs)
- [`_sass/loggator.sass`](_sass/loggator.sass) – Styles (form, dialogs)

**Polyfills for older browsers**

- [`assets/javascript/polyfills/promise.js`](assets/javascript/polyfills/promise.js)
- [`assets/javascript/polyfills/fetch.js`](assets/javascript/polyfills/fetch.js)
- [`assets/javascript/polyfills/template.js`](assets/javascript/polyfills/template.js)
- [`assets/javascript/polyfills/localStorage.js`](assets/javascript/polyfills/localStorage.js)

## Jekyll

**Pages**

- Inside `/pages`

```yaml
---
title: title
permalink: /title
# optional
navigation_weight: 2
---
```

**Pagescripts**

- If `assets/javascript/pagescripts/title.js` exist, is loaded in `/title` page.

**Themes**

- In [`_sass/themes`](_sass/themes)

**Build**

- Build locally with `jekyll serve --baseurl '/loggator.js'`
