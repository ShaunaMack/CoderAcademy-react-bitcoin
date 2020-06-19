import React from 'react';
import supportedCurrencies from '../supported-currencies.json'

const CurrencySelector = (props) => {
    const {currency, handleCurrencyChange} = props;
    console.log(currency)
    return (
        <div>
            <span > Select your currency: </span>
            <select 
                value={currency}
                onChange={(event) => handleCurrencyChange(event.target.value)}>
                { supportedCurrencies.map( (currency, index) =>
                    <option
                        value={currency.currency}
                        key={`${index}-${currency.country}`}>
                            {currency.country}
                    </option>
                    )
                }
            </select>
        </div>
    );
};

export default CurrencySelector;