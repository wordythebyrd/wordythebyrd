# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn build      # Run build.js to regenerate bin/output (the pre-rendered card)
yarn dev        # Build and immediately display the card
yarn lint       # Run standard (JS linter, no config needed)
```

No tests are configured (`yarn test` exits with an error).

Before publishing to npm, `prepublish` automatically runs `yarn build`.

## Architecture

This is a single-purpose npm package that renders a terminal business card via `npx wordythebyrd`.

**Two-step design:**

1. **`build.js`** — A build-time script that uses `chalk` + `boxen` to render a styled, boxed card string and writes it as a pre-rendered ANSI artifact to `bin/output`.
2. **`bin/card.js`** — The CLI entry point (shebang script). At runtime it simply reads `bin/output` and prints it. No runtime dependencies on chalk or boxen.

This means chalk and boxen are `devDependencies` only. The published package ships only `bin/card.js` and `bin/output` (the static pre-rendered output), keeping the installed footprint minimal.

**To update card content:** edit `build.js`, then run `yarn build` to regenerate `bin/output`. Both files must be committed.
