const jwt = require('jsonwebtoken')
require('dotenv').config({ path: 'config.env' });

exports.verifyToken = (req, res, next) => {

    console.log(req.headers.authorization)


    let token = req.headers.authorization

    if (!token) {
        return res.status(400).json({ msg: 'token no enviado' })
    }

    token = token.split(' ')

    jwt.verify(token[1], process.env.SECRET_KEY_JWT, (error, decode) => {
        if (error) {
            return res.status(403).json({ msg: 'el token es invalido' })
        }

        req.userData = decode
        next()
    })
}