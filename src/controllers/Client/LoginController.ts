import { Request, Response } from 'express';
import { User } from '../../../src/models/user';
import bcrypt from 'bcryptjs';


export const LoginUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.status(401).json({ success: false, message: 'Usuário não encontrado.' });
      return;
    }

    const passwordCorrect = bcrypt.compareSync(password, user.password);

    if (!passwordCorrect) {
      res.status(401).json({ success: false, message: 'Senha incorreta.' });
      return;
    }

    res.status(200).json({ success: true, message: 'Login bem-sucedido.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Erro no servidor.', error });
  }
};
