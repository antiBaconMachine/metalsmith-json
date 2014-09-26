var path = require('path');

module.exports = function(opts) {
    opts = opts || {};
    opts.key = opts.key || 'data';

    return function (files, metalsmith, done) {
        Object.keys(files).forEach(function (key) {
            var file = files[key];
            if (path.extname(key) === '.json') {
                file[opts.key] = JSON.parse(file.contents);
            }
        });
        done();
    };
};
