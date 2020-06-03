import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const pointController = new PointsController();
const itemsController = new ItemsController();

const routes = express.Router();

routes.get('/items', itemsController.index);
routes.post('/points', pointController.create);
routes.get('/points', pointController.index);
routes.get('/points/:id', pointController.show);

export default routes;
// .then(trx.commit)
// .catch(trx.rollback)
