import { Router, Request, Response } from "express";

const router = Router();
router.get("/", (req: Request, res: Response) => {
  res.json({
    message: "API running",
  });
});
router.post("/api/cards/validate", (req: Request, res: Response) => {
  const { cardNumber } = req?.body;

  if (!cardNumber) {
    return res.status(400).json({
      error: "Card number is required",
    });
  }

  if (typeof cardNumber !== "string") {
    return res.status(400).json({
      error: "Card number must be a string",
    });
  }

  if (cardNumber.trim() === "") {
    return res.status(400).json({
      error: "Card number cannot be empty",
    });
  }

  return res.json({
    message: `Card received: ${cardNumber}`,
  });
});

export default router;
