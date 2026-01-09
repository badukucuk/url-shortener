# URL Shortener

A modern and minimalist URL shortening service.

## Live Demo

🌐 **Try it now:** [https://url-shortener-9g79.onrender.com](https://url-shortener-9g79.onrender.com)

Visit the live application and start shortening URLs!

## Features

- ⚡ Fast and simple URL shortening
- 🔄 Returns existing short link for duplicate URLs
- ⏰ Automatic deletion after 30 days (TTL)
- 🎨 Modern and responsive user interface
- 📋 One-click copy functionality

## Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose)
- **URL Shortening:** nanoid (7 characters)
- **Frontend:** Vanilla JavaScript, HTML, CSS

## Requirements

- Node.js >= 14.x
- npm or yarn
- MongoDB database (local or cloud)

## Installation

1. Clone the repository:
```bash
git clone <repo-url>
cd url-shortener
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
BASE_URL=http://localhost:3000
```

4. Start the application:
```bash
npm start
```

5. Open in your browser: `http://localhost:3000`

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `MONGO_URI` | MongoDB connection string | *Required* |
| `PORT` | Server port | `3000` |
| `BASE_URL` | Base URL for shortened links | `http://localhost:3000` |

## API Endpoints

### POST `/shorten`
Create a shortened URL.

**Request Body:**
```json
{
  "fullUrl": "https://www.example.com"
}
```

**Response:**
```json
{
  "shortUrl": "http://localhost:3000/abc1234"
}
```

### GET `/:shortId`
Redirect to the original URL.

**Example:** `http://localhost:3000/abc1234` → redirects to original URL

## Usage

1. Enter your long URL on the homepage
2. Click the "Get Short Link" button
3. Copy and share the generated short link
4. The short link remains active for 30 days

## License

ISC
