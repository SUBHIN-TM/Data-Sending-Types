import express from 'express' ;
const router = express.Router();


import {home, reactForm, axiosJsonData, axiosURLENCODEDFormData, axiosAppendFormData, QueryData } from '../controllers/DataHandlers.js';

router.get('/',home)
router.post('/reactForm',reactForm);
router.post('/axiosJsonData',axiosJsonData);
router.post('/axiosURLENCODEDFormData',axiosURLENCODEDFormData);
router.post('/axiosAppendFormData',axiosAppendFormData);
router.post('/QueryData',QueryData);





export default router;