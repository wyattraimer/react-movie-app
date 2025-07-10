import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/movie/:imdbID' Component={MovieDetail}/>
          <Route Component={PageNotFound}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
