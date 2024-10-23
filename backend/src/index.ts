import express from "express"
import {PrismaClient } from "@prisma/client";
import { tournamentRouter } from "./routes/tournament";
import cors from "cors";
import { TOURNAMENT_API_BASE_URL } from "./constants/url";

const client = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());

app.use(TOURNAMENT_API_BASE_URL, tournamentRouter);


app.listen(3000);