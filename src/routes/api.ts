import { RouteAppender } from "./types";
import type { Request, Response } from 'express';
import axios from "axios";
import { renderTemplate } from "../../lib/template-renderer";
import { Config } from "../../config";

export const append: RouteAppender = (app) => {
  app.get('/api/people', async (req: Request, res: Response) => {
    console.dir(req.query, { depth: null });
    if (req.query["hide"]) {
      const document = await renderTemplate('people', { people: [], show: false });

      res
        .setHeader("Content-Type", "text/html")
        .status(200)
        .send(document);

    } else {
      try {
        const { data: people } = await axios.get<string[]>(`${Config.API_URL}/people`, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const document = await renderTemplate('people', { people, show: true });

        res
          .setHeader("Content-Type", "text/html")
          .status(200)
          .send(document);

      } catch (err) {
        res.setHeader("Content-Type", "application/json")
          .status(500)
          .send(`{"Message": "Issue hitting the \"/people\" endpoint"}`);
      }
    }


  });
  return app;
};