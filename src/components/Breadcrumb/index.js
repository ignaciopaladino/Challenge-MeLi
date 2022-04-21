import React from 'react';
import ListBreadcrumb from './ListBreadcrumb/';

const Breadcrumb = props => {

    return props.categories.length > 0 ? (
      <div className='breadcrumb-list'>   
         {props.categories.map( (category, index) => ( 
            <ListBreadcrumb 
                key={index}
                cat={category} 
                last={((index+1)===props.categories.length) ? true : false} /> 
        ))}
      </div> 
    ) : null;
    
}

export default Breadcrumb;