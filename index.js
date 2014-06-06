var _ = require('lodash');

module.exports = function(opts) {

    opts = _.extend({
        spam : 'eggs'
    }, (opts || {}));

    return function(files, metalsmith, done) {
        console.log(opts);
        done();
    };
};