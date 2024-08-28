import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

export const validateSignUp = [
  body('firstName').notEmpty().withMessage('Nome é obrigatório'),
  body('lastName').notEmpty().withMessage('Sobrenome é obrigatório'),
  body('phone').notEmpty().withMessage('Telefone é obrigatório'),
  body('email').isEmail().withMessage('Email inválido'),
  body('birthDate').notEmpty().withMessage('Data de nascimento é obrigatória'),
  body('username').notEmpty().withMessage('Usuário é obrigatório'),
  body('password').isLength({ min: 6 }).withMessage('Senha deve ter pelo menos 6 caracteres'),
  body('confirmPassword').custom((value, { req }) => value === req.body.password).withMessage('Confirmação de senha não corresponde'),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next(); // Chama o próximo middleware se não houver erros
    return; // Adiciona um retorno explícito para garantir que o TypeScript saiba que o caminho foi tratado
  }
];

// Validação para login
export const validateLogin = [
  body('email').notEmpty().withMessage('Usuário é obrigatório'),
  body('password').notEmpty().withMessage('Senha é obrigatória'),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next(); // Chama o próximo middleware se não houver erros
    return; // Adiciona um retorno explícito para garantir que o TypeScript saiba que o caminho foi tratado
  }
];