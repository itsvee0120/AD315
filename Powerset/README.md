# Power Set Generator

A simple web-based tool to generate and view the **power set** of a given set of elements. The application supports both **set notation** and **binary representation**, offering an educational way to understand subsets and bit manipulation.

## 🚀 Features

- Enter comma-separated set elements (e.g., `a,b,c` or `1,2,3`)
- Generate the **power set** instantly
- Toggle between:
  - **Set notation** (e.g., `{a, b}`)
  - **Binary representation** (e.g., `110 → {a, b}`)
- Example sets provided for quick testing
- Error handling for:
  - Empty input
  - Too many elements (limit set to 15 for performance)
  - Duplicate values
- Clean, modern UI with responsive layout

## 📁 Project Structure

```

.
├── index.html       # Main HTML file (UI layout)
├── script.js        # Core JavaScript logic
└── style.css        # Embedded in index.html (can be extracted)

```

## 💡 How It Works

1. User inputs elements (e.g., `a,b,c`)
2. JavaScript parses and removes duplicates
3. Power set is computed using **bit manipulation**
4. Results are displayed with toggleable views

### Example Output for `a,b`:

**Set Notation View**:

```

∅ {a} {b} {a, b}

```

**Binary View**:

```

00 → ∅
01 → {b}
10 → {a}
11 → {a, b}

```

## 🖥️ Running Locally

1. Clone this repo or copy the files
2. Open `index.html` in your browser
3. Enter your set and click **Generate Power Set**

No build tools or server needed — it's 100% client-side.

## 🔧 Customization

- Increase the element limit (currently `15`) in `script.js`:
  ```js
  if (setElements.length > 15) { ... }
  ```
