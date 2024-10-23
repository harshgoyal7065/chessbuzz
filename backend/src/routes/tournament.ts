import { Router } from "express";
import { prismaClient } from "../db";

const router = Router();

/// @ts-ignore
router.post("/", async (req, res) => {
  try {
    const newTournament = await prismaClient.tournament.create({
      data: {
        name: req.body.name,
        startDate: new Date("2024-11-01"),
        endDate: new Date("2024-11-15"),
        prizeFund: parseFloat(req.body.prizeFund),
      },
    });

    return res.status(201).json({
      message: "Tournament Created Successfully",
      tournament: newTournament,
    });
  } catch (error) {
    console.error("Tournament creation error:", error);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
});

export const tournamentRouter = router;
