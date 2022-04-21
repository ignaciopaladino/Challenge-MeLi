import React from 'react';
import Item from '../Item/Item';

const List = props => {

    //console.log(props);

    return (
      <div className='list-item-res'>           
        {props.item.map(item => ( <Item key={item.id} item={item} /> ))}
      </div> 
    );
}

export default List;