const formartPrice = price => {
    let pesoLocal = Intl.NumberFormat('es-AR');
    let symbol = price.currency == 'ARS' ? '$ ' : 'USD ';
    let decimals = (price.decimals === null) ? '00' : price.decimals;
    return symbol + pesoLocal.format(price.amount) + ',' + decimals;
}

export default formartPrice;