import React from 'react';



const Country = (props) => {
    const {name, population, flag , area}=props.country
    const handleAddCountry=props.handleAddCountry
    const flagStyle= {height:'50px'}
    const countryStyle= {
    border:'1px solid goldenrod',
    margin: '10px', padding : '10px'
    }

    
    return (
        <div style= { countryStyle}>
            <h4>This is {name}</h4>
            <img style={flagStyle} src={flag} alt=""/>
            <p>Population: {population}</p>
            <p><small>Area:{area}</small></p>
            <button onClick={() => handleAddCountry(props.country)}  >Add Country</button>
        </div>
    );
};

export default Country;