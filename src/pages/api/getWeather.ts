import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  weather: string,
  message?: string
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  // Fetch weather from http://localhost:3000/api/generateWeather
  // Weather will fail to come back 30% of the time
  // If successful, send weather and to do list to your webhook url
  // If 500 error, return "Service Unavailable" to the client
}





