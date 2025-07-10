# 🎬 Movie Rating Application

A modern and responsive web application that allows users to browse, search, and rate movies. Built with React and Redux Toolkit, the app uses Axios for API communication, React Router for navigation, Node-SASS for styling, and integrates additional features like asynchronous Redux actions, search filtering, and a responsive movie carousel.

## 🚀 Features

- Browse a list of popular or top-rated movies and shows
- Search for movies and shows using a custom filter built with Redux Middleware Thunk
- View detailed information for each title
- Rate and review movies (if supported by API)
- Responsive Movie Card Slider/Carousel using `react-slick`
- Clean and maintainable styles using SCSS
- Centralized and efficient state management with Redux Toolkit

## 🛠️ Tech Stack

- **React**: UI library for building reusable components
- **Redux Toolkit**: Simplified and scalable global state management
- **Redux Thunk**: Middleware to handle asynchronous actions like API calls
- **Axios**: Promise-based HTTP client for API requests
- **React Router DOM**: Declarative routing for single-page applications
- **Node-SASS**: SCSS compiler for advanced CSS features
- **React Slick**: Carousel/slider component for a modern UI
- **OMDb API**: Data source for movies and shows ([http://www.omdbapi.com/](http://www.omdbapi.com/))

## 📦 Installation

```bash
git clone https://github.com/your-username/movie-rating-app.git
cd movie-rating-app
npm install
```

## 🔧 Usage

To start the development server:

```bash
npm start
```

App will be available at `http://localhost:3000`.

## 📁 Project Structure

```
src/
├── api/                # Axios and API utilities
├── assets/             # Images, icons, and SCSS
├── components/         # Reusable UI components (MovieCard, Carousel, etc.)
├── features/           # Redux slices (search, movies, etc.)
├── middleware/         # Redux Thunk async actions
├── pages/              # Route-level pages
├── styles/             # Global and modular SCSS
├── App.jsx             # Main application component
├── index.js            # App entry point with Redux Provider
└── store.js            # Redux store setup with Thunk middleware
```

## 🌐 Routing

Routing is managed with **React Router DOM**. Main routes include:

- `/` - Home with featured movies and carousel
- `/movie/:id` - Detailed view of a specific movie or show
- `/search?q=query` - Search results page

## 🔍 Asynchronous Search with Redux Thunk

We implement **Redux Middleware Thunk** to handle asynchronous API calls. For example, search filtering is done via an async action creator that fetches results from the OMDb API:

```js
export const fetchSearchResults = createAsyncThunk(
  'search/fetchResults',
  async (query) => {
    const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
    return response.data.Search;
  }
);
```

This is dispatched automatically when the user types a query in the search input, and updates the Redux store accordingly.

## 🎞️ Movie Carousel

We use **react-slick** to implement a responsive Movie Card Slider:

```bash
npm install react-slick slick-carousel
```

Then import slick styles in your root SCSS or component:

```js
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
```

This allows for a clean, scrollable layout of featured or categorized movie cards.

## 🔐 OMDb API

This app uses the **OMDb API**. You must register for a free API key at [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx).

Create a `.env` file at the project root:

```env
REACT_APP_OMDB_API_KEY=your_api_key_here
```

## 📜 Scripts

- `npm start`: Start the dev server
- `npm run build`: Create a production build
- `npm run sass`: Manually compile SCSS (optional)

## 🎨 Styling

All styles are written in SCSS and compiled with **Node-SASS**. Styles are organized into partials and structured for reusability and clarity.

## 🤝 Contributing

Contributions are welcome! Open an issue or submit a PR if you'd like to improve something.

## 📝 License

This project is licensed under the MIT License.
