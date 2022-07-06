import { RouteAppender } from "./types";
import type { Request, Response } from 'express';
import { Config } from "../../config";

const BASE_URL = '/templates';
const TEMPLATES_URL = `${Config.PROJECT_ROOT}/templates`;

export const append: RouteAppender = (app) => {
    app.get(`${BASE_URL}/people.html`, (_req: Request, res: Response) => {
        res
          .setHeader("Content-Type", "text/html")
          .status(200)
          .sendFile("people.html", {
            root: TEMPLATES_URL,
          });
    });
    return app;
}