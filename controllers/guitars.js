const db = require('../models');

const index = (req, res) => {
    db.Guitar.find({}, (err, foundGuitars) => {
        if (err) return console.log('Error Error Error', err);

        return res.status(200).json({
            message: 'Success',
            guitars: foundGuitars,
            time: new Date(),
        });
    });
};

const show = (req, res) => {
    db.Guitar.findById(req.params.id, (err, foundGuitar) => {
        if (err) return console.log('Error Error Error', err);

        if (!foundGuitar) {
            return res
                .status(200)
                .json({ message: "Guitar with provided ID is not found." });
        }

        return res.status(200).json({
            data: foundGuitar,
        });
    });
};

const create = (req, res) => {

    if (!req.body.model) return res.json({ error: "error" });

    db.Guitar.create(req.body, (err, savedGuitar) => {
        if (err) return res.status(500).json({ error: "Something Went Wrong, Please Try Again" });



        return res.status(201).json({ guitar: savedGuitar });
    });
};

const update = (req, res) => {
    db.Guitar.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedGuitar) => {
            if (err) return console.log('Error Error Error', err);

            if (!updatedGuitar) {
                return res.status(200).json({
                    message: "Guitar with provided ID could not be found for update.",
                });
            }

            res.status(200).json({ guitar: updatedGuitar });
        }
    );
};

const addToCart = (req, res) => {
    const guitarId = req.params.id;
    db.User.findById(req.session.currentUser.id, (err, foundUser) => {
        if (err) return res.send(err);

        foundUser.cart.push(guitarId);
        foundUser.save();
        return res.status(201).json({ user: foundUser });
    });
};


const destroy = (req, res) => {
    db.Guitar.findByIdAndDelete(req.params.id, (err, deletedGuitar) => {
        if (err) return console.log('Error Error Error', err);

        if (!deletedGuitar) {
            return res.status(200).json({
                message: 'Guitar with provided ID could not be found for deletion.',
            });
        }

        res.status(200).json({ guitar: deletedGuitar });
    })
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
    addToCart
};