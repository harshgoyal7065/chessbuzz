import { z } from "zod";

export const CreateTournamentBody = z.object({
  name: z.string().min(1, { message: "Name is required" }), // Name should be a non-empty string
  startDate: z.date(), // DateTime field for the start date
  endDate: z.date(),   // DateTime field for the end date
  prizeFund: z.number().nonnegative(), // Prize fund should be a non-negative float
  participants: z.array(z.object({ /* TournamentParticipant schema here */ })), // Array of participants
  matches: z.array(z.object({ /* Match schema here */ })), // Array of matches
})