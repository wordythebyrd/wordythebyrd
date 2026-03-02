# wordythebyrd

Yes, this is an npm package whose entire purpose is to print my contact info in your terminal. Is it necessary? No. Does it bring me joy? Absolutely.

## Usage

```bash
npx wordythebyrd
```

## How it works

`build.js` pre-renders a chalk + boxen card to a static file at build time. The published package just reads and prints that file — so there are zero runtime dependencies.

## Credit

Shamelessly inspired by [@bitandbang](https://twitter.com/bitandbang).
