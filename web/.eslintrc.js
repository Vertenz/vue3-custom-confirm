module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: ['airbnb-base', 'plugin:prettier/recommended'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error',
    },
};