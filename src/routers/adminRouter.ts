import { Router } from 'express';
import { addPhotoByUrl, addPhotoByFile, getAllPhotos } from '../controllers/Admin/imageController';

const router: Router = Router();

// Rota para adicionar foto por URL
router.post('/add-url', addPhotoByUrl);

// Rota para adicionar foto por upload de arquivo
router.post('/add-file', addPhotoByFile);

// Rota para obter todas as fotos
router.get('/', getAllPhotos);

export default router;
