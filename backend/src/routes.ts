import express from 'express';
import multerConfig from './configs/multer';
import multer from 'multer';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const uploadImages = multer(multerConfig);

const pointController = new PointsController();
const itemsController = new ItemsController();

const routes = express.Router();

routes.get('/items', itemsController.index);
routes.get('/points', pointController.index);
routes.get('/points/:id', pointController.show);

routes.post('/points', uploadImages.single('image'), pointController.create);

export default routes;
