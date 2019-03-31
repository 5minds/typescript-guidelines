# ESLint config for 5Minds TypeScript projects

- install with `npm install --save-dev eslint-config-5minds-typescript`
- create a `.eslintrc.json` with
  ```
  {
    "extends": "5minds-typescript",
    "parserOptions": {
      "project": "./tsconfig.json"
    }
  }
  ```
- create a `.eslintignore` (like a `.gitignore`) with all the folders
  you dont want linted (e.g. like `node_modules` and `dist`)
- If you're using the VSCode eslint extension, add this to your config
  to make it lint typescript files (you can set `autofix` to false if
  you want):
  ```
  "eslint.validate": [
    {
      "language": "typescript",
      "autoFix": true
    }
  ]
  ```

# Faster linting
some special rules require parserServices to be generated. In the
default setup, this is done be providing the `parserOptions.project`
value. At the time of writing this, these are these rules:

- [@typescript-eslint/no-for-in-array](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md)
- [@typescript-eslint/no-unnecessary-qualifier](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md)
- [@typescript-eslint/no-unnecessary-type-assertion](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md)
- [@typescript-eslint/restrict-plus-operands](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md)

It is nice to be able to use these rules, but they come with a caveat:
Providing the parserServices is **very** slow. Linting a big project
took 5 sec. (7 sec. cpu time) without parserServices, and 150 sec.
(250 sec. cpu time) with parserServices. (see
https://github.com/typescript-eslint/typescript-eslint/issues/243 and
https://github.com/typescript-eslint/typescript-eslint/issues/389)

Because of this, this package exposes an additional ruleset, that
is identical to the default ruleset, but with the rules that require
parserServices disabled. To use this ruleset edit your
`.eslintrc.json` so it looks like this (no `parserOptions` required!):
  ```
  {
    "extends": "5minds-typescript/fast",
  }
  ```
