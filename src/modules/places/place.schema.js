const { Schema, model } = require('mongoose');

const placeLocaleSchema = new Schema({
  _id: false,
  lang: String,
  name: String,
  description: String,
});

const placeSchema = new Schema({
  countryId: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  rating: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
    require: true,
  },
  localizations: [placeLocaleSchema],
});

const Place = model('Place', placeSchema);
const Locale = model('PlaceLocale', placeLocaleSchema);

module.exports = { Place, Locale };
