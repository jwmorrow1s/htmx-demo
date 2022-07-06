import { RouteAppender } from "./types";
import type { Request, Response } from 'express';
import axios from "axios";
import { renderTemplate } from "../../lib/template-renderer";
import { Config } from "../../config";

export const append: RouteAppender = (app) => {
    app.get('/api/people', async (_req: Request, res: Response) => {
        try {
          const { data: people } = await axios.get<string[]>(`${Config.API_URL}/people`, { 
            headers: {
              'Content-Type': 'application/json' 
            }
          });
          const document = await renderTemplate('people', { people });

          res
            .setHeader("Content-Type", "application/json")
            .status(200)
            .send(document);

        } catch (err) {
          res.setHeader("Content-Type", "application/json")
            .status(500)
            .send(`{"Message": "Issue hitting the \"/people\" endpoint"}`);
        }
      });
      return app;
};