import express from 'express';
import { addTurf, getAllTurfs, getTurfsByOwner, getTurfById, updateTurf, deleteTurf } from '../controllers/turfControllers.js';
import upload from '../config/multerConfig.js';

const router = express.Router();


router.post('/add', upload.single('image'), addTurf);


router.get('/all', getAllTurfs);


router.get('/getAllTurfsByOwnerId/:ownerId', getTurfsByOwner);


router.get('/:id', getTurfById);


router.put('/:id', updateTurf);


router.delete('/:id', deleteTurf);

export default router;
