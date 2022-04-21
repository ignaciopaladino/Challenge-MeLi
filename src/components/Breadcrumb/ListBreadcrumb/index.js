import React from 'react';
import { Link } from "react-router-dom";

const ListBreadcrumb = props => {

    return (
      <div className={!props.last ? 'breadcrumb-item' : 'breadcrumb-item last'}>   
        <Link to={''} className="breadcrumb-link">
            {props.cat}
        </Link>
        <div className='breadcrumb-chevron'>
          {!props.last ? '>' : ''}
        </div>        
      </div> 
    );
}

export default ListBreadcrumb;