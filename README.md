## Getting Started

First, install the node modules:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Tasks:

### React Competency
- [ ] Allow for the addition and removal of the to-do Items component.

### Network Requests
- [ ]  Using the `getWeather.ts` found in `api/getWeather.ts`, get the data from `generateWeather.ts`.   
  *Do not modify generateWeather.ts but be aware that it will not always provide a 200 and may fail with a 500*
- [ ] Ensure to handle the failure case when a 500 with "Service unavailable" is returned. 

### Returned Request Rendering
- [ ] Create an additional rendered string below "how is the weather" that will be the returned message from the getWeather API call. 

### Web-hooks & Async Requests
- [ ] Once the weather is returned, ***only*** if it is successful, send both the message received as a payload to the provided web-hook service url found within sendData.ts

### Styles
- [ ] Using the snapshot match the CSS as best as possible.  
*Feel free to use tailwind if you are comfortable with it, otherwise plain CSS is fine.*

### Bonus
- [ ] Make the to-do list persist between refreshes however you feel like doing so. 

