## Youtube Trending Scraper

Youtube Trending App is displays list of trending videos on youtube. It is built on MERN Stack. This project uses the following technologies:
- [React](https://facebook.github.io/react/) and [React Router](https://reacttraining.com/react-router/) for the frontend
- [Express](http://expressjs.com/) and [Mongoose](http://mongoosejs.com/) for the backend

# Quick Start 🚀

### Create a .env file in root folder with the following

```
{
  "MONGO_URI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "YOUTUBE_API_KEY": "<your google developer API key with Youtube v3 enabled>",
  "NODE_ENV": "development"
}
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

