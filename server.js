import express, { json } from "express";
import fetch from "node-fetch";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());

const port = process.env.PORT || 3007;

const baseUrl = process.env.TIME_API_BASE_URL;

app.get("/", (req, res) => {
  res.send("year-zone-be is running...");
});

app.get("/timezones", async (req, res) => {
  console.log(`fetching timezones ${req.query.zones.join(", ")}...`);
  const responses = await Promise.all(
    JSON.parse(req.query.zones).map((zone) => {
      return fetch(`${baseUrl}/TimeZone/zone?timeZone=${zone}`);
    })
  );

  const timezones = await Promise.all(responses.map((res) => res.json()));
  res.send(timezones);
});

app.get("/timezone-names", async (req, res) => {
  console.log("fetching all timezone names...");
  const response = await fetch(`${baseUrl}/TimeZone/AvailableTimeZones`);
  const timezones = await response.json();
  res.send(timezones);
});

app.get("/timezone-from-location", async (req, res) => {
  const { lat, long } = req.query;
  const response = await fetch(
    `${baseUrl}/TimeZone/coordinate?latitude=${lat}&longitude=${long}`
  );

  const data = await response.json();
  res.send(data);
});

https: app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
