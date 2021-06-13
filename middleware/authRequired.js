const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {

        const token = bearerHeader.split(' ')[1];

        jwt.verify(token, 'process.env.JWT_SECRET', function (err, payload) {
            if (err) return res.status(500).json({ message: 'invalid token' });

            req.userId = payload._id;
            next();
        });
    } else {
        res.sendStatus(403);
    }
}