# ESLint config for 5Minds TypeScript projects

- install with `npm install --save-dev eslint-config-5minds-typescript`
- create a `.eslintrc.json` with
  ```
  {
    "extends": "5minds-typescript"
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
