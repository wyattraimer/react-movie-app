# 🎬 React Movie App

A modern movie and TV show browsing app built with React, Redux Toolkit, and the OMDb API. Users can search for movies, view detailed information, and navigate through a responsive UI.

## 🚀 Features

- 🔍 Search for movies and TV shows via the OMDb API
- 🎞 View detailed information for selected titles (plot, ratings, runtime, etc.)
- 🎬 Clickable movie cards with routing to dynamic detail pages
- ⚙️ Global state management with Redux Toolkit
- 🔄 Asynchronous data fetching with createAsyncThunk
- 🎡 Responsive carousel using react-slick
- 🧼 Clean styling using SCSS and Dart Sass
- 🧭 Client-side routing with React Router v6

## 🛠️ Tech Stack

- **React** (with Vite)
- **Redux Toolkit**
- **React Router DOM v6**
- **Axios** for API calls
- **SCSS** compiled with **Dart Sass**
- **React Slick** for carousel
- **OMDb API** for movie/show data

## 📦 Installation

```bash
git clone https://github.com/wyattraimer/react-movie-app.git
cd react-movie-app
npm install
```

## 🧪 Development

```bash
npm run dev
```

Open `http://localhost:5173` in your browser to run the app.

## 📁 Project Structure

```
src/
├── app/                     # Redux store setup
├── common/                  # API configs and constants
├── components/              # Reusable UI components
│   ├── Header/
│   ├── Footer/
│   ├── MovieCard/
│   └── MovieListing/
├── features/
│   └── movies/              # Redux slice and selectors
├── pages/
│   └── MovieDetail/         # Dynamic detail page
├── styles/                  # SCSS styles
├── App.jsx                  # Main app with routes
└── main.jsx                 # App entry point
```

## 🌐 Routing

Routes are defined using React Router DOM v6:

- `/` — Home page with featured listings
- `/movie/:imdbID` — Detail page for selected movie/show
- `*` — 404 Page Not Found fallback

## 🔌 OMDb API Setup

This app uses the [OMDb API](http://www.omdbapi.com/) to fetch movie/show data.  
Create a `.env` file in the root and add your API key:

```env
VITE_OMDB_API_KEY=your_api_key_here
```

## 📜 Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

## 🎨 Styling

All component-level and global styles are written in SCSS and compiled using Dart Sass via Vite’s built-in support.

## 📝 License

This project is licensed under the MIT License.
