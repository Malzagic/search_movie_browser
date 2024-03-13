import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import FetchDataContext from '../context/FetchDataContext';
import { ToastContainer, toast } from 'react-toastify';
import { searchMovies } from '../context/FetchData';
import 'react-toastify/dist/ReactToastify.css';

function Navigation() {
  const [search, setSearch] = useState('');
  const {data, dispatch} = useContext(FetchDataContext);

  const handleSearch = (e) => {

    setSearch(e.target.value);

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(search.length <= 0) return toast.error('Input name of movie please!');
    const setData = await searchMovies(search);

    dispatch({type: 'SET_DATA', payload: setData})

    setSearch('');
  }

  // console.log(data)

  return (
    <>
      <nav className='main-nav'>
        <Link to='/' className='header active'>Movie Search App</Link>
        <div className="search-container">
          <form role='search' onSubmit={handleSubmit}> 
            <input type="search" onChange={handleSearch} className='search-bar' placeholder='Search...' value={search}/>
            <button type='submit' className='btn btn-submit'>Submit</button>
          </form>
        </div>
      </nav>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default Navigation
