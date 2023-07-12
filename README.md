# Year Zone Backend

This is the backend API for the Year Zone project built with Node.js and Express. It interfaces with a time zone API to provide timezone data for city locations.

The backend is hosted on Render at https://year-zone-be.onrender.com.

It provides API endpoints consumed by the [Year Zone Frontend](https://github.com/dpletzke/year-zone-fe).

## Endpoints

- `GET /` - Health check route
- `GET /timezones` - Get time zone info for an array of zone IDs 
- `GET /timezone-names` - Get list of all available time zone names
- `GET /timezone-from-location` - Get time zone for a lat/long coordinate

## Usage

The backend requires a `TIME_API_BASE_URL` environment variable pointing to the time zone API it will call.

To run locally:

1. Clone the repo
2. Run `npm install`
3. Create a `.env` file with the `TIME_API_BASE_URL` variable
4. Run `npm start`
5. The server will start on port 3007

## Deployment

The API is configured for automatic deploys from GitHub to Render.

Built with:

- Node.js
- Express
- CORS
- Dotenv
- Node Fetch

Let me know if any sections need more detail!
