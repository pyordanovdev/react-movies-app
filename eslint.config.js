import jsdocPlugin from 'eslint-plugin-jsdoc'

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  googleConfig,
  prettierConfig,
  { plugins: { prettier: prettierPlugin, jsdoc: jsdocPlugin } },
  {
    rules: {
      'prettier/prettier': 'error',
      'jsdoc/check-alignment': 'warn',
      'jsdoc/check-param-names': 'warn',
      'prettier/prettier': 'error',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/react-in-jsx-scope': 'off',
      'jsdoc/require-jsdoc': [
        'warn',
        {
          require: {
            FunctionDeclaration: true,
            MethodDefinition: true,
            ClassDeclaration: true,
          },
        },
      ],
    },
  },
]
