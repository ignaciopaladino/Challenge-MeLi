import React from 'react';
import { Link } from "react-router-dom";
import FreeShipping from '../../../assets/img/ic_shipping.png';
import formartPrice from '../../../application/helpers/formatPrice';

const Items = props => {

    return (
      <div className="list-item-bor">  
        <div className='list-item-data'>   
            <div className='list-item-imageContainer'>
                <Link to={`/items/${props.item.id}`}>
                    <img src={props.item.picture} alt={props.item.title} />
                </Link>        
            </div>       
            <div className='list-item-dataContainer'>
                <div className='list-item-price'>
                    {formartPrice(props.item.price)}
                    { props.item.free_shipping ? <img src={FreeShipping} alt="Free Shipping" /> : null }
                </div>
                <Link to={`/items/${props.item.id}`}>
                    <div className='list-item-title'>
                        {props.item.title}
                    </div>
                </Link>
            </div>
            <div className='list-item-state'>
                    {props.item.state}
            </div>
         </div>
      </div> 
    );
}

export default Items;