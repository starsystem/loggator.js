# loggator.js
Login on GitHub pages with personal token

## Usage

The script manage login button/form/dialogs and expose `logged` variable which return `false` (logged out) or the personal token (logged in).

**Include**

- `javascript/loggator.js` – Script (defer to access DOM)
- `_includes/templates/loggator.html` – HTML templates (form, login button, dialogs)
- `_sass/loggator.sass` – Styles (form, dialogs)

**Polyfills for older browsers**

- `javascript/polyfills/promise.js`
- `javascript/polyfills/fetch.js`
- `javascript/polyfills/template.js`
- `javascript/polyfills/localStorage.js`

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

- If `/javascript/pagescripts/title.js` exist, is loaded in `/title` page.

**Themes**

- In `_sass/themes`

**Build**

- Build locally with `jekyll serve --baseurl '/loggator.js'`
