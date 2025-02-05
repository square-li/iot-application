module.exports = {
  env: {
    node: true,
  },
  extends: ['custom'],
  parserOptions: {
    ecmaVersion: 2020,
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false,
    },
  },
  overrides: [
    // NestJS modules are often empty
    {
      files: ['*.module.ts'],
      rules: {
        '@typescript-eslint/no-extraneous-class': 'off',
      },
    },
  ],
  root: true,
};
