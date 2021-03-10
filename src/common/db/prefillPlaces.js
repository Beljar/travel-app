const { Place, Locale } = require('../../modules/places/place.schema');
const { Types } = require('mongoose');
const placesData = require('../data/placesData.json');

const prefill = () => {
  console.log(placesData);
  placesData.forEach((place) => {
    console.log(place);
    place.countryId = Types.ObjectId(place.countryId);
    const locales = place.localizations.map((locale) => new Locale(locale));
    console.log(locales);
    place.localizations = locales;
    const placeData = new Place(place);
    placeData.save();
  });
  //Country.insertMany(countriesData.map((country) => new Country(country)));
};

module.exports = prefill;
