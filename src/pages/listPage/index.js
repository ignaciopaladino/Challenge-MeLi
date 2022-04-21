import React from 'react';
import Header from '../../components/Header';
import ListItems from '../../components/ListItems';

const listPage = props => {

    return (
      <div className='listPage'>
        <Header />
        <ListItems {...props} />
      </div> 
    );
}

export default listPage;