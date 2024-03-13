
const LINK = process.env.REACT_APP_API_SEARCH;
const KEY = process.env.REACT_APP_API_KEY;


export const searchMovies = async (search) => {

  if(search === null || search === undefined || search === '') return;

  const response = await fetch(`${LINK}${KEY}&query=${search}`);
  const data = await response.json();

  console.log([...data.results])
  return [...data.results]
}


