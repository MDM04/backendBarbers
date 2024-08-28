import { Request, Response } from 'express';
import Login from '../../models/LoginModel';

export const LoginUser = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  try {
    const user = await Login.findOne({ username });

    if (!user) {
      res.status(401).json({ success: false, message: 'Usuário não encontrado.' });
      return;
    }

    if (user.password !== password) {
      res.status(401).json({ success: false, message: 'Senha incorreta.' });
      return;
    }

    res.status(200).json({ success: true, message: 'Login bem-sucedido.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Erro no servidor.', error });
  }
};
