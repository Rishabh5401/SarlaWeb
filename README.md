# Product Code Validator

This Node.js module processes a list of product codes, validates them based on a specified format, normalizes the valid ones, and returns a summary.

## ✅ Features

- Validates product codes that must:
  - Be exactly **7 characters** long
  - Start with **3 letters (A-Z, case-insensitive)**
  - End with **4 digits (0–9)**
- Normalizes valid codes by converting the first 3 letters to uppercase.
- Returns:
  - Total number of codes processed
  - Count of valid and invalid codes
  - Sorted list of normalized valid codes
- No use of regular expressions or external libraries.

---

## 📁 Files

- `processCodes.js`: Main Node.js module exporting the `processData` function.
- `test.js`: Example script to demonstrate and test the module.

---

## 📦 Usage

### 1. Clone the repository

```bash
git clone https://github.com/your-username/product-code-validator.git
cd product-code-validator
