import express from 'express'
import { getcars, getCarByID, createCar, updateCar, deleteCar } from '../controllers/car.js';

const router = express.Router() ;

//get all cars
router.get('/all', getcars) ;

//get carByID
router.get('/:id', getCarByID);

//Create New Car
router.post('/add', createCar) ;

//Update Car
router.put('/edit/:id', updateCar);

//Delete Car
router.delete('/:id', deleteCar);

export default router ;