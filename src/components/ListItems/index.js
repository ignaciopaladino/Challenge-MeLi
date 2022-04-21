import React, {useContext, useEffect} from 'react';
import {AppContext} from '../../application/provider';
import { useLocation } from "react-router-dom";
import {getSearchs} from '../../application/actions/searchActions';
import List from './List/List';
import Breadcrumb from '../Breadcrumb';

const ListItems = props => {

    const [state,dispatch] = useContext(AppContext);
    //const [query, setQuery] = useState();
    const { search } = useLocation();
    let s = new URLSearchParams(search).get('search');

    /*let query = state.searchValue;
    if(query === '' || query === undefined){
      query = new URLSearchParams(search).get('search');     
    }  */
   
    useEffect(() => {
      //setQuery(s);
      getSearchs(s,dispatch);
    }, [s]);    

    useEffect(() => {
      //console.log(state.searchResults)
    }, [state.searchResults]);    
    
    return state.searchResults !== null && state.searchFetch === false ? (
      <section className='list-item'>      
        <Breadcrumb categories={state.searchResults.categories} /> 
        <List item={state.searchResults.items} />
      </section> 
    ) : null;
    
}

export default ListItems;