import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Header from './components/Header';
import MovieSection from './pages/MovieSection';
import MovieReviews from './pages/MovieReviews';
import NotFound from "./pages/NotFound";
import { FetchDataProvider } from './context/FetchDataContext';

function App() {
  return (
    <FetchDataProvider>
      <Router>
        <Navigation />
        <Header />
        <Routes>
          <Route path='/' element={<MovieSection />}/>
          <Route path='/movie-reviews' element={<MovieReviews />}/>
          <Route path='/notfound' element={<NotFound />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
    </FetchDataProvider>
  );
}

export default App;
