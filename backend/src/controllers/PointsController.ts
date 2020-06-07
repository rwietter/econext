import { Request, Response } from 'express';

import knex from '../database/connection';

class PointsController {
  async index(req: Request, res: Response) {
    try {
      const { city, uf, items } = req.query;

      const parseItems: number[] = String(items)
        ?.split(',')
        .map((item) => {
          return Number(item?.trim());
        });

      const collectPoints = await knex('points')
        .join('point_items', 'points.id', '=', 'point_items.point_id')
        .whereIn('point_items.item_id', parseItems)
        .where('city', String(city))
        .where('uf', String(uf))
        .distinct()
        .select('points.*');

      if (!collectPoints) {
        return res.status(400).json();
      }

      const serializedPoints = collectPoints.map((point) => {
        return {
          ...point,
          image_url: `http://192.168.43.158:3333/static/${point.image}`,
        };
      });

      return res.json(serializedPoints);
    } catch (e) {
      console.log(e.message);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { name, email, whatsapp, latitude, longitude, city, uf, items } = req.body;

      const trx = await knex.transaction();

      const collectPoint = {
        image: req.file.filename,
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
      };

      const insertedIds = await trx('points').insert(collectPoint);

      // relaciona itens com pontos de coleta
      const point_id = insertedIds[0];
      const pointItems = items
        .split(',')
        .map((item: string) => parseInt(item))
        .map((item_id: number) => {
          return {
            item_id,
            point_id,
          };
        });
      await trx('point_items').insert(pointItems).then(trx.commit).catch(trx.rollback);

      return res.json({ id: point_id, ...collectPoint });
    } catch (error) {
      console.log(error.message);
    }
  }

  async show(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const collectPoint = await knex('points').where('id', id).first();

      if (!collectPoint) {
        res.status(400).json({ message: 'Collected point not found' });
      }

      const serializedPoint = {
        ...collectPoint,
        image_url: `http://192.168.43.158:3333/static/${collectPoint.image}`,
      };

      const itemCollect = await knex('items')
        .join('point_items', 'items.id', '=', 'point_items.item_id')
        .where('point_items.point_id', id)
        .select('items.title');

      return res.json({ collectPoint: serializedPoint, itemCollect });
    } catch (error) {
      console.log(error.message);
    }
  }
}
export default PointsController;
