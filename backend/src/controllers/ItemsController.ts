import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
  async index(req: Request, res: Response) {
    const items = await knex('items').select('*');

    const serializedItems = items.map(({ id, image, title }) => {
      return {
        id: id,
        image_url: `http://192.168.43.158:3333/static/${image}`,
        title: title,
      };
    });
    res.json(serializedItems);
  }
}
export default ItemsController;
