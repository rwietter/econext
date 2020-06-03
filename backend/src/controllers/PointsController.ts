import { Request, Response } from 'express';

import knex from '../database/connection';

class PointsController {
  async index(req: Request, res: Response) {
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

    return res.json({ collectPoints });
  }

  async create(req: Request, res: Response) {
    const { name, email, whatsapp, latitude, longitude, city, uf, items } = req.body;

    const trx = await knex.transaction();

    const collectPoint = {
      image:
        'https://images.unsplash.com/photo-1582408904325-adf33a0ec010?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
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
    const pointItems = items.map((item_id: number) => {
      return {
        item_id,
        point_id,
      };
    });
    await trx('point_items').insert(pointItems);

    await trx.commit();

    return res.json({ id: point_id, ...collectPoint });
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const collectPoint = await knex('points').where('id', id).first();

    const itemCollect = await knex('items')
      .join('point_items', 'items.id', '=', 'point_items.item_id')
      .where('point_items.point_id', id)
      .select('items.title');

    if (!collectPoint) {
      res.status(400).json({ message: 'Collected point not found' });
    }
    return res.json({ collectPoint, itemCollect });
  }
}
export default PointsController;
