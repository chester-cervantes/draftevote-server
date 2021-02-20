const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE,
    {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('start');
})
    .catch(err => {
        console.error('App starting error:', err.stack);
        process.exit(1)
    });

module.exports.User = require('./user');
module.exports.Poll = require('./poll');