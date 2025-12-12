import { Router, Request, Response } from "express";

const router = Router();

// GET /lookup/:parcel
router.get("/:parcel", async (req: Request, res: Response) => {
  const { parcel } = req.params;

  if (!parcel) {
    res.status(400).json({
      value: null,
      exists: false,
      error: "Missing parcel parameter",
    });
    return;
  }

  const errorMessage = await validateParcelNumber(parcel);

  res.json({
    value: parcel,
    exists: !errorMessage,
    error: errorMessage,
  });
});

/**
 * Check if a parcel number exists
 *
 * @returns `null` if the number is valid, or an error message describing the issue
 */
const validateParcelNumber = async (
  parcelNumber: string
): Promise<string | null> => {
  const match = parcelNumber.match(/^([0-9]{3})-([0-9]{3})-([0-9]{3})$/);

  // Simulate a 1-2 second delay
  await new Promise((resolve) =>
    setTimeout(resolve, 1_000 + Math.random() * 1_000)
  );

  if (!match) {
    return "Incorrect format";
  }

  for (const segment of parcelNumber.split("-")) {
    if (parseInt(segment) % 2 != 1) {
      return "Doesn't exist (parcel segments must be odd numbers)";
    }
  }

  return null;
};

export default router;
