# Card Number Validation API

A simple REST API built with Node.js, TypeScript, and Express.js for validating payment card numbers using the Luhn algorithm.

## Tech Stack

- Node.js
- TypeScript
- Express.js
- Vitest

## Live API

The API is deployed and available at:

**Base URL:** `https://card-validator-api-xeb2.onrender.com`

### Validate Card Number

**POST** `https://card-validator-api-xeb2.onrender.com/api/cards/validate`

Example request:

```json
{
  "cardNumber": "4532015112830366"
}
```

Example response:

```json
{
  "valid": true
}
```

The endpoint accepts a card number and returns whether it passes the validation checks.

## Getting Started

### Prerequisites

- Node.js (local installation)
- npm

### Installation

Clone the repository and install the dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The API will run on:

```text
http://localhost:3000
```

### Production Build

Build the TypeScript project:

```bash
npm run build
```

Start the compiled application:

```bash
npm start
```

## API

### Validate Card Number

**POST** `/api/cards/validate`

#### Request Body

```json
{
  "cardNumber": "4532015112830366"
}
```

#### Valid Card Response

```json
{
  "valid": true
}
```

#### Invalid Card Response

```json
{
  "valid": false
}
```

### Error Responses

If `cardNumber` is missing:

```json
{
  "error": "cardNumber is required"
}
```

If `cardNumber` is not a string:

```json
{
  "error": "cardNumber must be a string"
}
```

If `cardNumber` is empty:

```json
{
  "error": "cardNumber cannot be empty"
}
```

These requests return a `400 Bad Request` status.

## Validation

The API performs the following checks:

1. Removes whitespace from the card number.
2. Ensures the value contains only digits.
3. Ensures the number contains between 13 and 19 digits.
4. Applies the Luhn algorithm to calculate the checksum.

## Testing

The project uses Vitest for unit testing.

Run the tests with:

```bash
npm test
```

The tests cover:

- A valid card number
- An invalid card number
- Malformed input

## Project Structure

```text
src/
├── index.ts
├── routes.ts
└── validator.ts

tests/
└── validator.test.ts
```

- `index.ts` creates and starts the Express application.
- `routes.ts` defines the API endpoint and handles HTTP input/output.
- `validator.ts` contains the card validation logic.
- `validator.test.ts` contains unit tests for the validation logic.
