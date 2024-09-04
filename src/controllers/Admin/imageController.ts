import { Request, Response } from 'express';
import {Photo}from '../../models/image';

// Adicionar foto por URL
export const addPhotoByUrl = async (req: Request, res: Response):Promise<void>=> {
  try {
    const { url } = req.body;
    if (!url) {
       res.status(400).json({ error: 'URL da foto é necessária.' });
       return
    }
    const newPhoto = new Photo({ url });
    await newPhoto.save();
    res.status(201).json(newPhoto);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar a foto por URL.' });
  }
};

// Adicionar foto por upload de arquivo
export const addPhotoByFile = async (req: Request, res: Response):Promise<void> => {
  try {
    const { fileData } = req.body;
    if (!fileData) {
       res.status(400).json({ error: 'Dados do arquivo são necessários.' });
       return
    }
    const newPhoto = new Photo({ fileData });
    await newPhoto.save();
    res.status(201).json(newPhoto);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar a foto por upload de arquivo.' });
  }
};

// Recuperar todas as fotos
export const getAllPhotos = async (req: Request, res: Response):Promise<void> => {
  try {
    const photos = await Photo.find();
    res.status(200).json(photos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao recuperar as fotos.' });
  }
};
