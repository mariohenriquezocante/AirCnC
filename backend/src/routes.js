const express = require("express")
const uploadConfig = require('./config/upload')
const multer = require('multer')


const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')

const routes = express.Router(); // Passando as rotas do express para uma variavel.
const upload = multer(uploadConfig)

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail') ,SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store)


module.exports = routes; //Exportando rotas.