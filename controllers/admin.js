const db = require('../models');

const index = async (req, res) => {
    await db.Guitar.find({}, (err, foundGuitars) => {
        if (err) return console.log('Error Error Error', err);

        return res.status(200).json({
            message: 'Success',
            guitars: foundGuitars,
            time: new Date(),
        });
    });
};

module.exports = { index };