// DO NOT MODIFY THIS FILE
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  weather: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (Math.random() < 0.3) {
    res.status(500).json({ weather: "Service Unavailable" })
  }
  res.status(200).json({ weather: "The weather is great" })
}
