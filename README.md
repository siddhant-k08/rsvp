# Top-G EventRSVP📧

A decentralized RSVP dapp where users deposit ETH to secure their spot at events, refunded upon check-in, ensuring commitment and trustless event management.

## Key Features🗝

- 1️⃣Creation of new Events
- 2️⃣RSVP to an Event
- 3️⃣Check in attendees
- 4️⃣Withdraw any remaining deposits from guests who didn’t check in and send them to the owner of the event

## Contract address and Subgraph link:

> **Web3RSVP Contract Address** (deployed on Polygon Amoy):
> `0x76dE4f5e49b3CDb9D03A123D0D171E16B7C0C54B`

> **Subgraph Query URL**:
> [View on TheGraphiQL](https://api.studio.thegraph.com/query/55877/rsvp/version/latest)

## 🛠️ Tech Stack
- **Frontend**: Next.js, ethers.js, Tailwind CSS
- **Backend**: Node.js, React.js
- **Blockchain**: Polygon Amoy
- **API**: RSVP Subgraph, apollo-client

## 📂Folder structure

- Smart contract can be found under `contracts/`
- Subgraph code located in `rsvp` directory
- Frontend located under `web3RSVP-frontend`
  - Subgraph is queried under `web3RSVP-frontend/pages/event/[id].js`
 
## Getting Started

- Clone the repository
- Install dependencies using `npm install`
- Change `.env` variables to your API Keys and Storage keys
- Run `npm run dev`

