import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

/*  
    Send both the data received from the weather API and the to-do list (from the front end app) to the webhook URL.
    Using https://webhook.site/ will generate a unique URL for you to test the webhook.
    The webhook URL should receive the following payload: 
    ```
        {
            "weather": "The weather is great",
            "list": ["item1", "item2", "item3"]
        }
    ```
*/
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const url = 'https://webhook.site/your-unique-url';

  // req will contain anything sent over from the front end call
  console.log(req);

  // Next.js return responses expected to be in the format:
  res.status(200).json({ message: 'Data sent successfully' });
  res.status(500).json({ message: 'Error while sending the data' });

  return;
}
