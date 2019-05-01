module.exports  = {
  'extends': require.resolve('eslint-config-5minds'),
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': ['@typescript-eslint', '6river'],
  'rules': {
    'import/prefer-default-export': 'off',
    'new-cap': 'off',
    '6river/new-cap': ['error', {
      'newIsCap': true,
      // this allows decorators to start with an upper case letter
      'capIsNewExceptionPattern': '(@\\w+)'
    }],

    '@typescript-eslint/adjacent-overload-signatures': ['error'],
    '@typescript-eslint/array-type': ['error', 'generic'],
    '@typescript-eslint/ban-types': ['error', {
      "types": {
        'Object': "Use {} instead.",
        'String': "Use 'string' instead.",
        'Number': "Use 'number' instead.",
        'Boolean': "Use 'boolean' instead."
      }
    }],
    '@typescript-eslint/ban-ts-ignore': ['error'],
    'camelcase': 'off',
    '@typescript-eslint/camelcase': ["error", { "properties": "always" }],
    '@typescript-eslint/class-name-casing': ['error'],
    '@typescript-eslint/explicit-function-return-type': ['error'],
    '@typescript-eslint/explicit-member-accessibility': ['error', {'overrides': {'constructors': 'no-public'}}],
    '@typescript-eslint/generic-type-naming': ['error', '^T[A-Z][a-zA-Z]+$'],
    "indent": "off",
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/interface-name-prefix': ['error', 'always'],
    '@typescript-eslint/member-delimiter-style': ['error', {
      "multiline": {
        "delimiter": "semi",
        "requireLast": true
      },
      "singleline": {
        "delimiter": "semi",
        "requireLast": false
      }
    }],
    '@typescript-eslint/member-naming': ['error', {
      'private': '^[a-z]',
      'protected': '^[a-z]',
      'public': '^[a-z]',
    }],
    '@typescript-eslint/member-ordering': ['error', {
      "default": [
         // Fields
        "public-static-field",
        "protected-static-field",
        "private-static-field",
        "public-instance-field",
        "protected-instance-field",
        "private-instance-field",

        "public-field",
        "protected-field",
        "private-field",
        "static-field",
        "instance-field",
        "field",

        // constructor
        "constructor",

        // methods
        "static-method",
        "instance-method"
      ]
    }],
    '@typescript-eslint/no-angle-bracket-type-assertion': 'off',
    '@typescript-eslint/no-array-constructor': ['error'],
    '@typescript-eslint/no-empty-interface': ['error'],
    '@typescript-eslint/no-explicit-any': ['error'],
    '@typescript-eslint/no-extraneous-class': ['error'],
    '@typescript-eslint/no-for-in-array': ['error'],
    '@typescript-eslint/no-inferrable-types': ['error'],
    '@typescript-eslint/no-misused-new': ['error'],
    '@typescript-eslint/no-namespace': ['error'],
    '@typescript-eslint/no-non-null-assertion': ['error'],
    '@typescript-eslint/no-object-literal-type-assertion': ['error', {'allowAsParameter': true}],
    '@typescript-eslint/no-parameter-properties': ['error'],
    '@typescript-eslint/no-require-imports': ['error'],
    '@typescript-eslint/no-this-alias': ['error'],
    '@typescript-eslint/no-triple-slash-reference': ['error'],
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/no-unnecessary-qualifier': ['error'],
    '@typescript-eslint/no-unnecessary-type-assertion': ['error'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-useless-constructor': ['error'],
    '@typescript-eslint/no-var-requires': ['error'],
    '@typescript-eslint/prefer-for-of': ['error'],
    '@typescript-eslint/prefer-function-type': ['error'],
    '@typescript-eslint/prefer-includes': ['error'],
    '@typescript-eslint/prefer-interface': ['error'],
    '@typescript-eslint/prefer-namespace-keyword': 'off',
    '@typescript-eslint/prefer-string-starts-ends-with': ['error'],
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/restrict-plus-operands': ['error'],
    '@typescript-eslint/type-annotation-spacing': ['error'],
    '@typescript-eslint/unbound-method': ['error', {'ignoreStatic': true}],
    '@typescript-eslint/unified-signatures': ['error']
  },

  // make eslint recognize typescript files
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
}
