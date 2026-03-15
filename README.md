## Aspire Card Dashboard – Review Guide

This project is a small React + TypeScript + Tailwind CSS app that replicates the Aspire cards dashboard (desktop + mobile) with interactive card behavior.

### Tech stack

- **React** (with TypeScript)
- **Vite or CRA** (depending on `package.json`) as the dev/build tool
- **Tailwind CSS** for styling

### Prerequisites

- **Node.js**: v18+ recommended  
- **npm** (comes with Node) or **yarn** – examples below use `npm`

### Install & run

From the project root (`my-app`):

```bash
npm install
npm run dev
```

Then open the printed URL (usually `http://localhost:5173` or `http://localhost:3000`) in your browser.

### Available scripts

Check `package.json` for the exact scripts; typical ones are:

- `npm run dev` – start dev server
- `npm run build` – production build
- `npm run preview` – preview the production build locally (after `build`)

### Feature overview

- **Desktop layout**
  - Left sidebar with navigation (Aspire branding, menu items).
  - Center content card showing:
    - Account balance and tabs (`My debit cards`, `All company cards`).
    - Main green debit card (`DebitCard` component) with:
      - Toggle to show/hide full card number.
      - Expiry + masked CVV.
    - Card actions row (`CardActions`) – Freeze card, Set spend limit, Add to GPay, Replace card, Cancel card.
    - Right info panel (`CardInfoPanel`) – Card details header + Recent transactions list.

- **Mobile layout**
  - Blue header area with:
    - Account balance and `+ New card` button.
    - Tabs (`My debit cards`, `All company cards` – static text for now).
    - Green card with pagination dots underneath.
  - **Pull‑up white sheet** that:
    - Overlaps the card and **scrolls over it** while the card/header remain static.
    - Contains `CardActions` and `CardInfoPanel`.
  - Fixed bottom navbar (`MobileNavbar`) with the “Cards” tab highlighted.

### Card behavior

- **Multiple cards**
  - Initial state contains one card (`Mark Henry`).
  - Add new cards via `+ New card` (desktop: `BalanceHeader` button, mobile: header button).  
  - New cards get a generated number + expiry (`utils/cardGenerator.ts`).
  - Dots beneath the card (desktop + mobile) switch between cards by index.

- **Show / hide card number**
  - Implemented inside `DebitCard` using local `show` state.
  - Toggles between masked and full card number when clicking the eye button.

- **Freeze / Unfreeze card**
  - Current card has an `isFrozen` flag in `Dashboard` state.
  - Clicking **Freeze card** in `CardActions` toggles this flag:
    - Button label switches between **Freeze card** and **Unfreeze card**.
    - Card visual:
      - Reduced opacity when frozen.
      - Small “Frozen” pill shown at the bottom-left of the card.

### Files of interest

- `src/pages/Dashboard.tsx`
  - Main layout for both desktop and mobile.
  - Manages cards array, selected index, add‑card modal, swipe gestures, and freeze state.
- `src/components/DebitCard.tsx`
  - Renders the green card, show/hide number, and frozen visual state.
- `src/components/CardActions.tsx`
  - Renders the actions row and wires the Freeze/Unfreeze behavior.
- `src/components/CardInfoPanel.tsx`
  - Card details header and recent transactions list.
- `src/components/MobileNavbar.tsx`
  - Fixed mobile bottom navigation.
- `src/utils/cardGenerator.ts`
  - Simple helpers to generate pseudo card numbers and expiry dates.

### How to verify key behaviors

- **Desktop**
  - Resize browser to large width.
  - Confirm:
    - Sidebar is fixed on the left.
    - Main white content card centered, with green card on the left and info panel on the right.
    - Freeze button toggles card opacity + “Frozen” pill and its own label.

- **Mobile**
  - Use browser dev tools → responsive mode (e.g. iPhone 11).
  - Confirm:
    - Blue header + green card stay static initially.
    - White sheet (actions + info) overlaps the card and scrolls upward over it; only that area scrolls while the card remains behind.
    - Bottom navbar stays fixed at the bottom.

### Notes for reviewers

- The goal is **UI/UX fidelity** to the provided Aspire screenshots plus minimal realistic interactivity (freeze/unfreeze, show/hide number, card navigation, and basic add‑card behavior).
- No backend or real payments integration is included; all data is in‑memory React state.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
