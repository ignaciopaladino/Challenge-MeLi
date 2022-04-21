import React from 'react';
import formartPrice from '../../../application/helpers/formatPrice';

const Details = props => {

    const handleClick = (e) => {
        e.preventDefault();
        let idProd = props.item.id.replace('MLA','MLA-');
        window.open(`https://articulo.mercadolibre.com.ar/${idProd}`,'_blank');
    }

    return (
      <div className='list-item-detail'>   
        <div className='list-item-fsCont'>
            <div className='list-item-detail-imgDesCont'>
                <div className='list-item-detail-imageContainer'>
                        <img src={props.item.picture} alt={props.item.title} />      
                </div>   
                <div className='list-item-detail-descriptionContainer'>
                    <div className='list-item-detail-titleDescripton'>Descripción del producto</div>
                    <div className='list-item-detail-descripton'>{props.item.description}</div>
                </div>
            </div>
            <div className='list-item-detail-dataContainer'>
                <div className='list-item-detail-meta'>
                    {props.item.condition === 'new' ? 'Nuevo' : 'Usado'} | {props.item.sold_quantity} Vendidos
                </div>
                <div className='list-item-detail-title'>
                        {props.item.title}
                </div>            
                <div className='list-item-detail-price'>
                    {formartPrice(props.item.price)}
                </div>
                <div className='list-item-detail-button'>
                    <button 
                        onClick={handleClick}
                    >Comprar</button>
                </div>
            </div>
        </div>
      </div> 
    );
}

export default Details;