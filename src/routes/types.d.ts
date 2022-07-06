import type { Express } from 'express';

export interface RouteAppender {
    (app: Express): Express
}
