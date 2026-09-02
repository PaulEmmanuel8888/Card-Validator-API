import { Router, Request, Response } from "express";

const router = Router();
router.get("/", (req: Request, res: Response) => {
  res.json({
    message: "API running",
  });
});
router.post("/api/cards/validate", (req: Request, res: Response) => {
  const { cardNumber } = req.body;
  res.json({
    message: `Card number: ${cardNumber}`,
  });
});

export default router;
