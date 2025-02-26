// DO NOT MODIFY THIS FILE
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export type WeatherData = {
  message: string;
};

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<WeatherData>
) {
  if (Math.random() < 0.3) {
    res.status(500).json({ message: 'Service Unavailable' });
  }
  res.status(200).json({ message: 'The weather is great' });
}
