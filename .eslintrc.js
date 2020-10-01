module.exports = {
  // Specifying Environments
  // https://eslint.org/docs/user-guide/configuring#specifying-environments
  env: {
    browser: true,
    node: true,
  },

  // Shared Settings
  // https://eslint.org/docs/user-guide/configuring#adding-shared-settings
  settings: {
    // https://www.npmjs.com/package/eslint-plugin-react
    react: {
      pragma: 'React', // Pragma to use, default to "React"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
    },
  },

  // Specifying Parser
  // https://eslint.org/docs/user-guide/configuring#specifying-parser
  parser: '@typescript-eslint/parser',

  // Specifying Parser Options
  // https://eslint.org/docs/user-guide/configuring#specifying-parser-options
  parserOptions: {
    ecmaVersion: 2019, // set to 3, 5 (default), 6, 7 (2016), 8 (2017), 9 (2018), 10 (2019), 11 (2020), or 12 (2021) to specify the version of ECMAScript syntax you want to use.
    sourceType: 'module', // set to "script" (default) or "module" if your code is in ECMAScript modules.
    // an object indicating which additional language features you'd like to use.
    ecmaFeatures: {
      jsx: true, // enable JSX
    },
  },

  // Extending Configuration Files
  // https://eslint.org/docs/user-guide/configuring#extending-configuration-files
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],

  // Using the configuration from a plugin
  // https://eslint.org/docs/user-guide/configuring#using-the-configuration-from-a-plugin
  plugins: ['@typescript-eslint'],

  // Rules
  rules: {},
};
