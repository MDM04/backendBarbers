import express from 'express';
import { signUpClient } from '../controllers/Client/SignUpController';
// Adicione o controller de login
import { validateLogin, validateSignUp } from '../middlewares/validation';
import { LoginUser } from '../controllers/Client/LoginController';
import { Products } from '../controllers/Client/ProductController';
import { Barbers } from '../controllers/Client/BarbersController';

const router = express.Router();

// Rota para o signup de clientes
router.post('/signup', validateSignUp, signUpClient);

// Rota para o login
router.post('/login', validateLogin, LoginUser);

router.get('/products', Products);
router.put('/products', Products);
router.post('/products', Products);
router.delete('/products', Products);

router.get('/barbers', Barbers);
router.put('/barbers', Barbers);
router.post('/barbers', Barbers);
router.delete('/barbers', Barbers);



export default router;
