# Bayesian Diagnostic Calculator

This React-based application calculates the probability of having a disease given a positive or negative test result, using **Bayes' Theorem**. It's designed for medical professionals and students who want a quick and accurate way to interpret diagnostic tests.

---

## Features

- Input:
  - Disease Prevalence
  - Test Sensitivity
  - Test Specificity
- Outputs:
  - Probability of Disease given a Positive Test (P(Disease|Test+))
  - Probability of Disease given a Negative Test (P(Disease|Test−))
- Extras:
  - Confusion matrix (True Positive, False Positive, etc.)
  - Interactive pie chart using Recharts
  - Clean and responsive UI

---

## Tech Stack

- **React** – Frontend library
- **Recharts** – Visualization
- **HTML/CSS** – Styling and layout

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/bayesian-calculator.git
cd bayesian-calculator
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm start
```

Open `http://localhost:3000` in your browser.

---

## How to Use

1. **Enter:**

   - **Prevalence** (e.g. 5)
   - **Sensitivity** (e.g. 90)
   - **Specificity** (e.g. 95)

2. Click **Calculate**
3. View:

   - **P(Disease | Test +)** = e.g. 48.65%
   - **P(Disease | Test -)** = e.g. 0.55%

4. See confusion matrix and pie chart for visual breakdown

---

## How It Works

This app uses **Bayes’ Theorem**:

### P(Disease | Test+):

$$
P(D|T+) = \frac{P(T+|D) \cdot P(D)}{P(T+)}
$$

### P(Disease | Test−):

$$
P(D|T−) = \frac{P(T−|D) \cdot P(D)}{P(T−)}
$$

It also computes a confusion matrix:

- **TP**: True Positive
- **FP**: False Positive
- **TN**: True Negative
- **FN**: False Negative

---

## Extra Credit Features

- Confusion matrix table
- Pie chart (Recharts)
- Responsive UI with validation
