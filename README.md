# Raindrop.io 5.0
Mono repo for Raindrop.io web app, browser extension and desktop app

## Build
Be sure to run `yarn` before calling any commands below
| target   | command | notes |
|----------|---------|-------|
| web      | `yarn build` |
| electron | `yarn build:electron` |
| chrome   | `yarn build:extension:chrome` |
| firefox  | `yarn build:extension:firefox` |
| opera    | `yarn build:extension:opera` |
| safari   | `yarn build:extension:safari` | Then open **build/xcode** project

## Development
| target   | command | notes |
|----------|---------|-------|
| web      | `yarn local` |
| chrome   | `yarn local:extension:chrome` | Turn off `same-site-by-default-cookies` in Chrome browser flags