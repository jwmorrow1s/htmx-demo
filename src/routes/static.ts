import type { Request, Response } from 'express';
import { Config } from '../../config';
import type { RouteAppender } from './types';

export const append: RouteAppender = (app) => {
  app.get("/", (_req: Request, res: Response) => {
    res
      .setHeader("Content-Type", "text/html")
      .status(200)
      .sendFile("index.html", { root: Config.PROJECT_ROOT });
  });

  app.get("/style.css", (_req: Request, res: Response) => {
    res
      .setHeader("Content-Type", "text/css")
      .status(200)
      .sendFile("output.css", { root: `${Config.PROJECT_ROOT}/out` });
  });

  app.get("/htmx.js", (_req: Request, res: Response) => {
    res
      .setHeader("Content-Type", "text/javascript")
      .status(200)
      .sendFile("htmx.min.js", {
        root: `${Config.PROJECT_ROOT}/node_modules/htmx.org/dist`,
      });
  });

  app.get("/hyperscript.js", (_req: Request, res: Response) => {
    res
      .setHeader("Content-Type", "text/javascript")
      .status(200)
      .sendFile("index.js", {
        root: `${Config.PROJECT_ROOT}/node_modules/hyperscript`,
      });
  });

  app.get("/favicon.ico", (_req: Request, res: Response) => {
    res
      .setHeader("Content-Type", "img/png")
      .setHeader("Content-Security-Policy", "img-src 'self'")
      .status(200)
      .sendFile("favicon.ico", { root: Config.PROJECT_ROOT });
  });
  return app;
}