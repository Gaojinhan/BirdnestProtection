import express, { Request, Response } from 'express';
import { body, query, validationResult } from 'express-validator';

export const router = express.Router();

router.get(
    '/',
    );