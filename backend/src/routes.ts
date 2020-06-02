import express from 'express';

const routes = express.Router();

const get = routes.get('/', (req, res) => {
  res.json({
    title: 'vikings',
    description: 'serie',
  });
});

export default routes;
