module.exports = {
    testMatch: ['**/__tests__/**/*.js'],
    collectCoverage: true,
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    "moduleFileExtensions": ["js", "tsx",,"jsx" ,"json"]

}
