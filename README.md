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
- [ ] Using the input field add items to the do list when clicking on the button next to it.
- [ ] Using the delete button on an item, remove the targeted item from the list.

### Network Requests
- [ ]  Using the `generateWeather.ts` found in `api/generateWeather.ts`, get the data from this endpoint.   
  *Do not modify generateWeather.ts but be aware that it will not always provide a 200 and may fail with a 500*
- [ ] Ensure to handle the failure case when a 500 with "Service unavailable" is returned. 

### Returned Request Rendering
- [ ] Create an additional rendered string below "how is the weather" that will be the returned message from the generateWeather API call. 

### Web-hooks & Async Requests
- [ ] Once the weather is returned, ***only*** if it is successful, send the message received as a payload to the provided web-hook service url found within `api/sendData.ts`

### Styles
- [ ] What design (UX / UI ) practices would you do to make this page better.
  - [ ] Have you used any design systems in the past ?

### Bonus
- [ ] Make the to-do list persist between refreshes however you feel like doing so. 
  - [ ] May not have enough time so verbalizing ideas is fine too. 

