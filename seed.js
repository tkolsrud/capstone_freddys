const db = require('./models');
const data = require('./guitarData.json');

db.Guitar.create(data.guitars, (err, seededGuitars) => {
    if (err) console.log(err);

    console.log(data.guitars.length, 'guitars created successfully');

    process.exit();
});

