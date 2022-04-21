import {createContext, useReducer } from 'react';
import searchReducer from './reducers/searchReducer';

const initialState = {
    searchFetch: false,
    searchValue: '',
    searchResults: null,
    detailItem: null
}
//const AppContext = createContext(initialState);

export default ({ children }) =>{

    //const [state, setState] = useState({});
    const [state, dispatch] = useReducer(searchReducer, initialState);
    
    //<AppContext.Provider value={[state, setState]}>
    return (            
            <AppContext.Provider value={[state, dispatch]}>
                {children}
            </AppContext.Provider>  
    );
   
}

export const AppContext = createContext(initialState);