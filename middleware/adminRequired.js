// const jwt = require('jsonwebtoken');

// module.exports = (req, res, next) => {
//     const bearerHeader = req.headers['authorization'];

//     if (typeof bearerHeader !== 'undefined') {

//         const token = bearerHeader.split(' ')[1];

//         jwt.verify(token, 'process.env.JWT_SECRET', function (payload) {
//             if (payload.admin) {

//                 next();
//             } else {
//                 res.sendStatus(403);
//             };
//         });
//     } else {
//         res.sendStatus(403);
//     }
// }