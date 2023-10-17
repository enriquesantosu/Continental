const Product = require("../models/Product")

exports.createProduct = async (req, res) => {
    console.log('creado desde el controlador')
    console.log(req.body)
    try {
        let product;
        product = new Product(req.body);
        await product.save();
        res.send(product);
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Ups... hubo un error' })
    }
}

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Ups... hubo un error' })
    }
}

exports.getOneProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            res.status(404).json({ mensaje: 'The user does not exist' })
            return
        }
        res.json(product)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Ups... hubo un error' })
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const { target, bounty, condition, urlLink } = req.body
        let productData = await Product.findById(req.params.id)
        if (!productData) {
            res.status(404).json({ message: 'the product does not exist' })
        }
        productData.target = target
        productData.bounty = bounty
        productData.condition = condition
        productData.urlLink = urlLink

        productData = await Product.findOneAndUpdate({ _id: req.params.id }, productData)
        res.json(productData)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Ups... hubo un error' })
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            res.status(404).json({ mensaje: 'The user does not exist' })
            return
        }
        await Product.findOneAndRemove({ _id: req.params.id })
        res.status(200).json({ mensaje: 'El usuario fue eliminado' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Ups... hubo un error' })
    }
}

