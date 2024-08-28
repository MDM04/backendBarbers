import { Request, Response,  } from 'express';
import Client from '../../models/SignUp';
import bcrypt from 'bcryptjs';

export const signUpClient = async (req: Request, res: Response) => {
  const { firstName, lastName, phone, email, birthDate, username, password } = req.body;

  try {
    // Verificar se o email ou o usuário já existe
    const existingClient = await Client.findOne({ $or: [{ email }, { username }] });
    if (existingClient) {
      return res.status(400).json({ message: 'Email ou nome de usuário já em uso.' });
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 12);

    // Criar novo cliente
    const newClient = new Client({
      firstName,
      lastName,
      phone,
      email,
      birthDate,
      username,
      password: hashedPassword
    });

    // Salvar no banco de dados
    await newClient.save();

    return res.status(201).json({ message: 'Cadastro realizado com sucesso!' });
  } catch (error) {
    console.error('Erro ao cadastrar cliente:', error);
    return res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};
