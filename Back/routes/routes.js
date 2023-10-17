const express = require('express');
const router = express.Router();
const productController = require('../controllers/productControllers')
const userController = require('../controllers/userControllers')
const shoppingController = require('../controllers/shoppingControllers')
const sessionController = require('../controllers/sesionController')
const mdJWT = require('../middleware/jwt')


// router.post('/', () => {
//     console.log('Creando producto...');
// })



router.post('/product', productController.createProduct);
router.get('/products', productController.getProducts)
router.get('/product/:id', productController.getOneProduct)
router.put('/product/:id', productController.updateProduct)
router.delete('/product/:id', productController.deleteProduct)


router.post('/user', userController.createUser)
router.get('/users', mdJWT.verifyToken, userController.getUsers)
router.delete('/user/:id', userController.deleteUser)
router.post('/ingreso', sessionController.generarToken)
router.put('user/:id', userController.updateUser)

router.get('/shopping', shoppingController.getShopping)
router.get('/shopping-one/:id', shoppingController.GetOneShopping)
router.post('/shopping', shoppingController.createShopping)
router.put('/shopping/:id', shoppingController.updateShopping)
router.delete('/shopping/:id', shoppingController.deleteShopping)



module.exports = router;