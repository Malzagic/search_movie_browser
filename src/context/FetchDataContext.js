import { createContext, useReducer } from "react";
import fetchDataReducer from './FetchDataReducer';

const FetchDataContext = createContext();

export const FetchDataProvider = ({ children }) => {

  const initialState = {
    data: [],
  }

  const [state, dispatch] = useReducer(fetchDataReducer, initialState);


  return (
    <FetchDataContext.Provider value={{
      ...state,
      dispatch,
    }}>
      {children}
    </FetchDataContext.Provider>
  )
}

export default FetchDataContext;