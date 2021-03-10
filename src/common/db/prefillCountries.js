const { Country, Locale } = require('../../modules/countries/country.schema');
const countriesData = require('../data/countriesData.json');

const prefill = () => {
  console.log(countriesData);
  countriesData.forEach((country) => {
    const locales = country.localizations.map((locale) => new Locale(locale));
    console.log(locales);
    country.localizations = locales;
    const countryData = new Country(country);
    console.log(country);
    countryData.save();
  });
  //Country.insertMany(countriesData.map((country) => new Country(country)));
};

module.exports = prefill;
