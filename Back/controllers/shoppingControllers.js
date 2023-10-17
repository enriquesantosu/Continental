const Gun = require('../models/Shopping')

exports.createShopping = async (req, res) => {
    try {
        console.log(req.body);
        let user = new Gun(req.body);
        await user.save();
        res.send(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Ups... hubo un error' });
    }
};


exports.getShopping = async (req, res) => {
    try {
        let users = await Gun.find();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Ups... hubo un error' });
    }
};


exports.GetOneShopping = async (req, res) => {
    try {
        const gun = await Gun.findById(req.params.id)
        if (!gun) {
            res.status(404).json({ mensaje: 'The gun does not exist' })
            return
        }
        res.json(gun)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Ups... hubo un error' })
    }
}


exports.updateShopping = async (req, res) => {
    try {
        const { name, price, urlLink } = req.body
        let gunData = await Gun.findById(req.params.id)

        if (!gunData) {
            res.status(404).json({ message: 'the product does not exist' })
        }
        gunData.name = name
        gunData.price = price
        gunData.urlLink = urlLink

        gunData = await Gun.findOneAndUpdate({ _id: req.params.id }, gunData)
        res.json(gunData)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Ups... hubo un error' })
    }
}


exports.deleteShopping = async (req, res) => {
    try {
        const gun = await Gun.findById(req.params.id)
        if (!gun) {
            res.status(404).json({ mensaje: 'The product does not exist' })
            return
        }
        await Gun.findOneAndRemove({ _id: req.params.id })
        res.status(200).json({ mensaje: 'El producto fue eliminado' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Ups... hubo un error' })
    }
}