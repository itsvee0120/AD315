# Probability Simulator

This is a React-based educational app to simulate and visualize different probability experiments:

- **Coin Tosses**
- **Dice Rolls**
- **Card Draws (Standard and Tarot)**
- **Compound Events (e.g., flipping two coins multiple times)**

## Features

- Interactive buttons to simulate each experiment
- Real-time statistical feedback
- Graphical bar charts to visualize outcomes
- Switch between different experiments
- Clean UI with CSS styling

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/probability-simulator.git
cd probability-simulator
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm start
# or
yarn start
```

The app will run at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── App.js                # Main app container with navigation
├── App.css              # Shared global styles
├── components/
│   ├── CoinTosses.js
│   ├── DiceRoll.js
│   ├── CardDraw.js
│   └── CompoundEvents.js
└── index.js
```
