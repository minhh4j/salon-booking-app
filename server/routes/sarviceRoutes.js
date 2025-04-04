import { addSarviceController, deleteServices, getServiceController, updateSarvice } from '../controllers/sarviceController.js';

import express from 'express';
import upload from '../middleware/uploadMiddleware.js';


const router = express.Router();

router.post('/add-sarvice', upload.array('image'),addSarviceController);
router.get('/get-sarvice' , getServiceController);
router.delete('/delete-service/:sarviceId' , deleteServices);
router.patch('/update-sarvice/:sarviceId' , updateSarvice)

export default router;

