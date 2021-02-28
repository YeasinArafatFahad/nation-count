import React from 'react';


const Country = (props) => {
    console.log(props)
    const{name,flag, population,capital}=props.country
    const handleAddCountry= props.handleAddCountry;
    const countryStyle={
        border:'3px solid green',
        margin:'100px',
        padding:'20px',
        
    }
    return (
        <div style={countryStyle}>
            <img style={{height:'100px',width:'200px'}} src={flag} alt=""/>
            <h2>Country Name: {name}</h2>
            <h4>Capital:{capital}</h4>
            <h5>Population:{population}</h5>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>

            
        </div>
    );
};

export default Country;