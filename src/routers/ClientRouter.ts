import express from 'express';
import { signUpClient } from '../controllers/Client/SignUpController';
// Adicione o controller de login
import { validateLogin, validateSignUp } from '../middlewares/validation';
import { LoginUser } from '../controllers/Client/LoginController';

const router = express.Router();

// Rota para o signup de clientes
router.post('/signup', validateSignUp, signUpClient);

// Rota para o login
router.post('/login', validateLogin, LoginUser);


export default router;
