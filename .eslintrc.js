module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:vue/recommended",
  ],
  plugins: ["prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": [
      2,
      {
        args: "none",
        ignoreRestSiblings: true,
        caughtErrors: "none",
        argsIgnorePattern: "^_",
      },
    ],
    "no-trailing-spaces": "error",
    "no-empty": "off",
    "vue/max-attributes-per-line": "off",
    "vue/no-side-effects-in-computed-properties": "off",
    "vue/attribute-hyphenation": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/html-self-closing": "off",
    "vue/html-indent": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/singleline-html-element-content-newline": "off",
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: true,
      },
    ],
    intent: "off",
    // indent: [
    //   'error',
    //   2,
    //   {
    //     VariableDeclarator: 'first',
    //     ObjectExpression: 'first'
    //   }
    // ],
    "prettier/prettier": [
      "error",
      {},
      {
        usePrettierrc: true,
      },
    ],
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)"],
      env: {
        jest: true,
      },
    },
  ],
};
