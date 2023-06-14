import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {
  res.json("LOGIN");
};

export const generateCode = (req: Request, res: Response) => {
  res.json("GENERATE CODE");
};
