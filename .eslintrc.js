module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: 'off',
    'no-unused-vars': [2, { vars: 'all', args: 'none' }],
    quotes: 'off',
    'no-dupe-keys': 'off',
    'vue/require-prop-type-constructor':'off',
    'no-undef':'off',
    'no-unused-vars':'off',
    'vue/no-unused-components':'off'

  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ]
};
