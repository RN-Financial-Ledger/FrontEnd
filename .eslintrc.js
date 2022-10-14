module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  'prefer-const': [
    'error',
    {
      destructuring: 'any',
      ignoreReadBeforeAssign: false,
    },
  ],
  'linebreak-style': [
    'error',
    require('os').EOL === '\r\n' ? 'windows' : 'unix',
  ],
  'prettier/prettier': ['error', {endOfLine: 'auto'}],
}
