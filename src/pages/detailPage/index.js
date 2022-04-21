import React from 'react';
import Header from '../../components/Header';
import ItemDetails from '../../components/ItemDetails';

const listPage = props => {

    return (
      <div className='detailsPage'>
        <Header />
        <ItemDetails {...props} />
      </div> 
    );
}

export default listPage;