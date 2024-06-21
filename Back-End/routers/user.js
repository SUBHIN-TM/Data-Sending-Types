import express from 'express' ;
const router = express.Router();


import { home } from '../controllers/DataHandlers.js';

router.get('/',home);


export default router;