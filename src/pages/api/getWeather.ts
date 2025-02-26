import type { NextApiRequest, NextApiResponse } from 'next';
import { WeatherData } from './generateWeather';

/*  
    Get the data from the weather API
    The data returned should look lik
    ```
        {
            "message": "The weather is great" | "Service Unavailable"
        }
    ```
*/
export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<WeatherData>
) {
  // For Next.js reference, you can use the following as the url:
  const url = 'http://localhost:3000/api/generateWeather';

  // Next.js return responses expected to be in the format:
  res.status(200).json({ message: 'Message here' });
  res.status(500).json({ message: 'Service Unavailable' });

  return;
}
