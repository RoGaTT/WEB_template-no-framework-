const path = require('path')

module.exports = {
    paths: {
        source: path.join(__dirname, '/src'),
        build: path.join(__dirname, '/build'),
        configs: path.join(__dirname, '/configs'),
        public: path.join(__dirname, '/public')
    }
}