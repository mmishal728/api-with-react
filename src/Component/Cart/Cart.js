import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation = totalPopulation + country.population;
    
    const totalPopulation = cart.reduce((sum,country)=>sum+country.population ,0)
    const totalArea = cart.reduce((sum,country)=>sum+country.area,0)
        
    return (
        <div>
            <h4>Total Added Country :{cart.length}</h4>
            <p>Total added population:{totalPopulation}</p>
            <p><small>Total added Area:{totalArea}</small></p>

        </div>
    );
};

export default Cart;