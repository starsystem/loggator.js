# loggator.js
Login on GitHub pages with personal token

## Usage

The script manage login button/form/dialogs and expose `logged` variable which return `false` (logged out) or the personal token (logged in).

**Include**

- `loggator.js` – Script (defer to access DOM)
- `loggator.html` – HTML templates (form, login button, dialogs)
- `loggator.sass` – Styles (form, dialogs)

**Polyfills for older browsers**

- `promise.js`
- `fetch.js`
- `template.js`
- `localStorage`

**Build**

- Build locally with `jekyll serve --baseurl '/loggator.js'`
