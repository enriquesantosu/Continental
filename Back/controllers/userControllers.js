const User = require('../models/User')

exports.createUser = async (req, res) => {
    try {
        console.log(req.body);
        let user = new User(req.body);
        await user.save();
        res.send(user);
    } catch (error) {
        console.error(error); // Move console.log inside the catch block
        res.status(500).json({ msg: 'Ups... hubo un error' });
    }
};


exports.getUsers = async (req, res) => {
    try {
        let users = await User.find();
        res.json(users);
    } catch (error) {
        console.error(error); // Move console.log inside the catch block
        res.status(500).json({ msg: 'Ups... hubo un error' });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const usuario = await User.findById(req.params.id)
        if (!usuario) {
            res.status(404).json({ mensaje: 'El usuario no existe' })
            return
        }
        await User.findOneAndRemove({ _id: req.params.id })
        res.status(200).json({ mensaje: 'El usuario fue eliminado' })

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Ups, algo paso, comuníquese con el administrador' })
    }
}


exports.updateUser = async (req, res) => {
    try {

        const { name, last_name, email, password } = req.body
        let dataUsuario = await User.findById(req.params.id)
        if (!dataUsuario) {
            res.status(404).json({ mensaje: 'El usuario no existe' })
            return
        }

        dataUsuario.name = name
        dataUsuario.last_name = last_name
        dataUsuario.email = email
        dataUsuario.password = password

        dataUsuario = await User.findOneAndUpdate({ _id: req.params.id }, dataUsuario)
        res.json(dataUsuario)

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Ups, algo paso, comuníquese con el administrador' })
    }
}