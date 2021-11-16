import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose' ;
import cors from 'cors' ;

//import userRoutes
import userRoutes from './routes/user.js' ;
import tripRoutes from './routes/trip.js' ;
import carRoutes from './routes/car.js' ;
import billingRoutes from './routes/billing.js' ;
const app = express() ;

app.use(express.json({limit:"20mb", extended : true}));
app.use(express.urlencoded({limit:"20mb", extended : true}));

app.use(cors()) ;

//create routes
app.use('/', userRoutes);
app.use('/trip', tripRoutes);
app.use('/car', carRoutes);
app.use('/billing', billingRoutes);

const PORT = process.env.PORT || 5000 ;
app.listen(PORT,()=>{
    console.log(`Express Server is running at port: ${PORT}`)
})
