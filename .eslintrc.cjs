module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: ['./tsconfig.json', './tsconfig.node.json']
  },
  env: {
    es6: true,
    browser: true,
    jest: true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended'
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    'no-underscore-dangle': 'off',
    'arrow-body-style': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-console': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-indent-props': [2, 2],
    'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
    'react/jsx-filename-extension': [0],
    '@typescript-eslint/no-inferrable-types': 'off',
    'no-inferrable-types': 'off',
    'import/prefer-default-export': 'off'
  }
};
