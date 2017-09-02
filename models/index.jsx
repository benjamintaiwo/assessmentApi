import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const CountrySchema = new mongoose.Schema({
  isocode: String,
  name: String,
  description: String
});

const CitySchema = new mongoose.Schema({
  name: String,
  description: String,
  country: {type: mongoose.Schema.Types.ObjectId, ref: 'Country'},
});


const LanguageSchema = new mongoose.Schema({
  isocode: String,
  name: String
});

const Account = new mongoose.Schema({
    username: String,
    password: String
});

Account.plugin(passportLocalMongoose);


const Country  = mongoose.model('Country', CountrySchema);
const City     = mongoose.model('City', CitySchema);
const Language = mongoose.model('Language', LanguageSchema);
const Account  = mongoose.model('Account', Account)

export {Country, City, Language, Account}
