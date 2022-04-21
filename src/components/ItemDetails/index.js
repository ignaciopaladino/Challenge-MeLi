import React, {useContext, useEffect} from 'react';
import {AppContext} from '../../application/provider';
import {getDetails} from '../../application/actions/searchActions';
import Details from './Details/Details';
import Breadcrumb from '../Breadcrumb';

const ItemDetails = props => {
    
    //const [state,setState] = useContext(AppContext);
    const [state,dispatch] = useContext(AppContext);
    
    useEffect(() => {
      getDetails(props.match.params.id,dispatch);
    }, [props.match.params.id]);   

    return state.detailItem !== null && state.searchFetch === false ? (
      <section className='details-item'>    
        <Breadcrumb categories={state.detailItem.categories} />        
        <Details item={state.detailItem.item} />
      </section> 
    ) : null;

}

export default ItemDetails;