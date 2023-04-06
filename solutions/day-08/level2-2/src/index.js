import React from "react";
import { createRoot } from 'react-dom/client';
import { countriesData } from './data/countries.js';

const CountryFlag = ({flagData:{name, flag}}) => (
    <div className="flagWrapper">
      <img className="flag" src={flag} alt={`${name} flag`}></img>
      <p><b>{name}</b></p>
    </div>
);

const CountryInfo = ({
  countryData: {
    capital,
    languages,
    population,
    currency
  }
}) => (
  <div className="countryInfo">
    <p><b>Capital: </b>{capital}</p>
    <p><b>Languages: </b>{languages.join(', ')}</p>
    <p><b>Population: </b>{population}</p>
    <p><b>Currency: </b>{currency}</p>
  </div>
);

const Button = ({name, selectCountry}) => (
  <div>
    <button className="btn" onClick={selectCountry}>{name}</button>
  </div>
);

class App extends React.Component {
  state = {
    country: {
      name: 'Afghanistan',
      capital: 'Kabul',
      languages: ['Pashto', 'Uzbek', 'Turkmen'],
      population: 27657145,
      flag: 'https://restcountries.eu/data/afg.svg',
      currency: 'Afghan afghani',
    }
  }

  selectCountry = () => {
    let randIndex = Math.floor(Math.random() * countriesData.length);
    const randCountry = countriesData[randIndex];
    this.setState({
      country: {
        name: randCountry.name,
        capital: randCountry.capital,
        languages: randCountry.languages,
        population: randCountry.population,
        flag: randCountry.flag,
        currency: randCountry.currency
      }
    });
  }

  render() {
    return (
      <div className="appWrapper">
        <CountryFlag flagData={this.state.country} />
        <CountryInfo  countryData={this.state.country}/>
        <Button name={'Select Country'} selectCountry={this.selectCountry} />
      </div>
    );
  }
}

const rootElem = document.querySelector('.root');
const root = createRoot(rootElem);
root.render(<App />);