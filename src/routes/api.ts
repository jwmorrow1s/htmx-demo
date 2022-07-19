import { RouteAppender } from "./types";
import type { Request, Response } from 'express';
import axios from "axios";
import { Config } from "../../config";
import { templateRegistry } from "../../lib/template-registry";
import { PeopleTemplateProps, Person } from "../types";

export const append: RouteAppender = (app) => {
  app.get('/api/people', async (req: Request, res: Response) => {
    const show = req.query["hide"] !== "true";
    try {
      const { data: people } = show ? await axios.get<Person[]>(`${Config.API_URL}/people`, {
        headers: {
          'Content-Type': 'application/json'
        }
      }) : { data: [] };
      const document = await templateRegistry.render<PeopleTemplateProps>('people', { people, show });

      res
        .setHeader("Content-Type", "text/html")
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