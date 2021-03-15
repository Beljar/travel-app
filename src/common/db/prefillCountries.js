const { Country, Locale } = require('../../modules/countries/country.schema');
const countriesData = require('../data/countriesData.json');

const prefill = () => {
  console.log(countriesData);
  countriesData.forEach((country) => {
    const locales = country.localizations.map((locale) => new Locale(locale));
    country.localizations = locales;
    const countryData = new Country(country);
    console.log('adding country');
    console.log(country);
    countryData.save();
  });
  //Country.insertMany(countriesData.map((country) => new Country(country)));
};

module.exports = prefill;
