require('dotenv').config({ path: 'config.env' });
const jwt = require('jsonwebtoken')
const Usuario = require('../models/User')

exports.generarToken = async (req, res) => {
    const { email, password, } = req.body

    const user = await Usuario.findOne({ email: email })
    console.log(user);
    if (!user) {
        return res.status(401).json({ msg: 'el correo es invalido' })
    }

    if (user.password !== password) {
        return res.status(401).json({ msg: "la contraseña es invalida" })
    }

    const payload = {
        id: user._id,
        name: user.name,
        last_name: user.last_name
    }

    const token = jwt.sign(payload, process.env.SECRET_KEY_JWT, { expiresIn: '24h' })
    return res.status(202).json({ token: token })
}


