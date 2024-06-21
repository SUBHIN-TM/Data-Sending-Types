import express from 'express' ;
const router = express.Router();


import {home, reactForm, axiosJsonData, axiosURLENCODEDFormData, axiosAppendFormData } from '../controllers/DataHandlers.js';

router.get('/',home)
router.post('/reactForm',reactForm);
router.post('/axiosJsonData',axiosJsonData);
router.post('/axiosURLENCODEDFormData',axiosURLENCODEDFormData);
router.post('/axiosAppendFormData',axiosAppendFormData);




export default router;