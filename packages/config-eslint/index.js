/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:svelte/recommended',
        'prettier',
        'turbo'
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        extraFileExtensions: ['.svelte']
    },
    env: {
        browser: true,
        node: true
    },
    overrides: [
        {
            files: ['*.svelte'],
            parser: 'svelte-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser'
            }
        }
    ]
};
