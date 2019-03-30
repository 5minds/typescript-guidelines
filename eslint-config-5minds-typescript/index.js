module.exports  = {
  "extends": "5minds",
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint", "6river"],
  "rules": {
    "import/prefer-default-export": 0,
    "new-cap": 0,
    "6river/new-cap": ["error", {
      "newIsCap": true,
      // this allows decorators to start with an upper case letter
      "capIsNewExceptionPattern": "(@\\w+)"
    }],
    "max-len": ["error", 150],
    "@typescript-eslint/array-type": ["error", "generic"],
    "@typescript-eslint/type-annotation-spacing": ["error", {
      "before": false,
      "after": true
    }]
  },

  // make eslint recognize typescript files
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
}
