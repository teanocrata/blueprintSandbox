import {
  name,
  datatype,
  address,
  lorem,
  animal,
  commerce,
  company,
  database,
  date,
  finance,
  image,
  phone
} from "faker";
import { ColumnI } from "./DataTable";

export const columns: Array<
  ColumnI & {
    getRandomData: () =>
      | number
      | string
      | Array<number>
      | Array<string>
      | null
      | Date;
  }
> = [
  {
    field: "User name",
    semantic: { type: "category" },
    getRandomData: name.findName
  },
  {
    field: "Estimated Salary",
    semantic: { type: "number" },
    getRandomData: datatype.float
  },
  {
    field: "Country",
    semantic: { type: "category" },
    getRandomData: address.country
  },
  {
    field: "User description",
    semantic: { type: "text" },
    getRandomData: lorem.paragraph
  },
  {
    field: "Subscription date",
    semantic: { type: "date" },
    getRandomData: datatype.datetime
  },
  {
    field: "Age",
    semantic: { type: "number " },
    getRandomData: () => Math.floor(Math.random() * 80)
  },
  {
    field: "Job title",
    semantic: { type: "category" },
    getRandomData: name.jobTitle
  },
  {
    field: "Phone number",
    semantic: { type: "category" },
    getRandomData: phone.phoneNumber
  },
  {
    field: "Zip Code",
    semantic: { type: "category" },
    getRandomData: address.zipCode
  },
  {
    field: "City",
    semantic: { type: "category" },
    getRandomData: address.city
  },
  {
    field: "Address",
    semantic: { type: "category" },
    getRandomData: address.streetAddress
  },
  {
    field: "State",
    semantic: { type: "category" },
    getRandomData: address.state
  },
  {
    field: "Latitude",
    semantic: { type: "number" },
    getRandomData: address.latitude
  },
  {
    field: "Longitude",
    semantic: { type: "category" },
    getRandomData: address.longitude
  },
  {
    field: "Nearby GPS Coodinate",
    semantic: { type: "object" },
    getRandomData: address.nearbyGPSCoordinate
  },
  {
    field: "Time Zone",
    semantic: { type: "category" },
    getRandomData: address.timeZone
  },
  {
    field: "Company name",
    semantic: { type: "category" },
    getRandomData: company.companyName
  },
  {
    field: "Company catch phrase",
    semantic: { type: "category" },
    getRandomData: company.catchPhrase
  },
  {
    field: "Company name",
    semantic: { type: "category" },
    getRandomData: company.companyName
  },
  {
    field: "Image",
    semantic: { type: "url" },
    getRandomData: image.image
  },
  { field: "Cats", semantic: { type: "url" }, getRandomData: image.cats },
  {
    field: "Address zipCode",
    semantic: { type: "category" },
    getRandomData: address.zipCode
  },
  {
    field: "Address city",
    semantic: { type: "category" },
    getRandomData: address.city
  },
  {
    field: "Address cityPrefix",
    semantic: { type: "category" },
    getRandomData: address.cityPrefix
  },
  {
    field: "Address citySuffix",
    semantic: { type: "category" },
    getRandomData: address.citySuffix
  },
  {
    field: "Address cityName",
    semantic: { type: "category" },
    getRandomData: address.cityName
  },
  {
    field: "Address streetName",
    semantic: { type: "category" },
    getRandomData: address.streetName
  },
  {
    field: "Address streetAddress",
    semantic: { type: "category" },
    getRandomData: address.streetAddress
  },
  {
    field: "Address streetSuffix",
    semantic: { type: "category" },
    getRandomData: address.streetSuffix
  },
  {
    field: "Address streetPrefix",
    semantic: { type: "category" },
    getRandomData: address.streetPrefix
  },
  {
    field: "Address secondaryAddress",
    semantic: { type: "category" },
    getRandomData: address.secondaryAddress
  },
  {
    field: "Address county",
    semantic: { type: "category" },
    getRandomData: address.county
  },
  {
    field: "Address country",
    semantic: { type: "category" },
    getRandomData: address.country
  },
  {
    field: "Address countryCode",
    semantic: { type: "category" },
    getRandomData: address.countryCode
  },
  {
    field: "Address state",
    semantic: { type: "category" },
    getRandomData: address.state
  },
  {
    field: "Address stateAbbr",
    semantic: { type: "category" },
    getRandomData: address.stateAbbr
  },
  {
    field: "Address latitude",
    semantic: { type: "category" },
    getRandomData: address.latitude
  },
  {
    field: "Address longitude",
    semantic: { type: "category" },
    getRandomData: address.longitude
  },
  {
    field: "Address direction",
    semantic: { type: "category" },
    getRandomData: address.direction
  },
  {
    field: "Address cardinalDirection",
    semantic: { type: "category" },
    getRandomData: address.cardinalDirection
  },
  {
    field: "Address ordinalDirection",
    semantic: { type: "category" },
    getRandomData: address.ordinalDirection
  },
  {
    field: "Address nearbyGPSCoordinate",
    semantic: { type: "category" },
    getRandomData: address.nearbyGPSCoordinate
  },
  {
    field: "Address timeZone",
    semantic: { type: "category" },
    getRandomData: address.timeZone
  },
  {
    field: "Animal dog",
    semantic: { type: "dog" },
    getRandomData: animal.dog
  },
  {
    field: "Animal cat",
    semantic: { type: "cat" },
    getRandomData: animal.cat
  },
  {
    field: "Animal snake",
    semantic: { type: "snake" },
    getRandomData: animal.snake
  },
  {
    field: "Animal bear",
    semantic: { type: "bear" },
    getRandomData: animal.bear
  },
  {
    field: "Animal lion",
    semantic: { type: "lion" },
    getRandomData: animal.lion
  },
  {
    field: "Animal cetacean",
    semantic: { type: "cetacean" },
    getRandomData: animal.cetacean
  },
  {
    field: "Animal horse",
    semantic: { type: "horse" },
    getRandomData: animal.horse
  },
  {
    field: "Animal bird",
    semantic: { type: "bird" },
    getRandomData: animal.bird
  },
  {
    field: "Animal cow",
    semantic: { type: "cow" },
    getRandomData: animal.cow
  },
  {
    field: "Animal fish",
    semantic: { type: "fish" },
    getRandomData: animal.fish
  },
  {
    field: "Animal crocodilia",
    semantic: { type: "crocodilia" },
    getRandomData: animal.crocodilia
  },
  {
    field: "Animal insect",
    semantic: { type: "insect" },
    getRandomData: animal.insect
  },
  {
    field: "Animal rabbit",
    semantic: { type: "rabbit" },
    getRandomData: animal.rabbit
  },
  {
    field: "Animal type",
    semantic: { type: "type" },
    getRandomData: animal.type
  },
  {
    field: "Commerce color",
    semantic: { type: "categoy" },
    getRandomData: commerce.color
  },
  {
    field: "Commerce department",
    semantic: { type: "categoy" },
    getRandomData: commerce.department
  },
  {
    field: "Commerce productName",
    semantic: { type: "categoy" },
    getRandomData: commerce.productName
  },
  {
    field: "Commerce price",
    semantic: { type: "categoy" },
    getRandomData: commerce.price
  },
  {
    field: "Commerce productAdjective",
    semantic: { type: "categoy" },
    getRandomData: commerce.productAdjective
  },
  {
    field: "Commerce productMaterial",
    semantic: { type: "categoy" },
    getRandomData: commerce.productMaterial
  },
  {
    field: "Commerce product",
    semantic: { type: "categoy" },
    getRandomData: commerce.product
  },
  {
    field: "Commerce productDescription",
    semantic: { type: "categoy" },
    getRandomData: commerce.productDescription
  },
  {
    field: "Company suffixes",
    semantic: { type: "category" },
    getRandomData: company.suffixes
  },
  {
    field: "Company companyName",
    semantic: { type: "category" },
    getRandomData: company.companyName
  },
  {
    field: "Company companySuffix",
    semantic: { type: "category" },
    getRandomData: company.companySuffix
  },
  {
    field: "Company catchPhrase",
    semantic: { type: "category" },
    getRandomData: company.catchPhrase
  },
  {
    field: "Company bs",
    semantic: { type: "category" },
    getRandomData: company.bs
  },
  {
    field: "Company catchPhraseAdjective",
    semantic: { type: "category" },
    getRandomData: company.catchPhraseAdjective
  },
  {
    field: "Company catchPhraseDescriptor",
    semantic: { type: "category" },
    getRandomData: company.catchPhraseDescriptor
  },
  {
    field: "Company catchPhraseNoun",
    semantic: { type: "category" },
    getRandomData: company.catchPhraseNoun
  },
  {
    field: "Company bsAdjective",
    semantic: { type: "category" },
    getRandomData: company.bsAdjective
  },
  {
    field: "Company bsBuzz",
    semantic: { type: "category" },
    getRandomData: company.bsBuzz
  },
  {
    field: "Company bsNoun",
    semantic: { type: "category" },
    getRandomData: company.bsNoun
  },
  {
    field: "Database column",
    semantic: { type: "category" },
    getRandomData: database.column
  },
  {
    field: "Database type",
    semantic: { type: "category" },
    getRandomData: database.type
  },
  {
    field: "Database collation",
    semantic: { type: "category" },
    getRandomData: database.collation
  },
  {
    field: "Database engine",
    semantic: { type: "category" },
    getRandomData: database.engine
  },
  {
    field: "Datatype number",
    semantic: { type: "category" },
    getRandomData: datatype.number
  },
  {
    field: "Datatype float",
    semantic: { type: "category" },
    getRandomData: datatype.float
  },
  {
    field: "Datatype datetime",
    semantic: { type: "category" },
    getRandomData: datatype.datetime
  },
  {
    field: "Datatype string",
    semantic: { type: "category" },
    getRandomData: datatype.string
  },
  {
    field: "Datatype uuid",
    semantic: { type: "category" },
    getRandomData: datatype.uuid
  },
  {
    field: "Datatype boolean",
    semantic: { type: "category" },
    getRandomData: datatype.boolean
  },
  {
    field: "Datatype hexaDecimal",
    semantic: { type: "category" },
    getRandomData: datatype.hexaDecimal
  },
  {
    field: "Datatype json",
    semantic: { type: "category" },
    getRandomData: datatype.json
  },
  {
    field: "Datatype array",
    semantic: { type: "category" },
    getRandomData: datatype.array
  },
  {
    field: "Date past",
    semantic: { type: "category" },
    getRandomData: date.past
  },
  {
    field: "Date future",
    semantic: { type: "category" },
    getRandomData: date.future
  },
  {
    field: "Date between",
    semantic: { type: "category" },
    getRandomData: date.between
  },
  {
    field: "Date betweens",
    semantic: { type: "category" },
    getRandomData: date.betweens
  },
  {
    field: "Date recent",
    semantic: { type: "category" },
    getRandomData: date.recent
  },
  {
    field: "Date soon",
    semantic: { type: "category" },
    getRandomData: date.soon
  },
  {
    field: "Date month",
    semantic: { type: "category" },
    getRandomData: date.month
  },
  {
    field: "Date weekday",
    semantic: { type: "category" },
    getRandomData: date.weekday
  },
  {
    field: "Finance account",
    semantic: { type: "category" },
    getRandomData: finance.account
  },
  {
    field: "Finance accountName",
    semantic: { type: "category" },
    getRandomData: finance.accountName
  },
  {
    field: "Finance routingNumber",
    semantic: { type: "category" },
    getRandomData: finance.routingNumber
  },
  {
    field: "Finance mask",
    semantic: { type: "category" },
    getRandomData: finance.mask
  },
  {
    field: "Finance amount",
    semantic: { type: "category" },
    getRandomData: finance.amount
  },
  {
    field: "Finance transactionType",
    semantic: { type: "category" },
    getRandomData: finance.transactionType
  },
  {
    field: "Finance currencyCode",
    semantic: { type: "category" },
    getRandomData: finance.currencyCode
  },
  {
    field: "Finance currencyName",
    semantic: { type: "category" },
    getRandomData: finance.currencyName
  },
  {
    field: "Finance currencySymbol",
    semantic: { type: "category" },
    getRandomData: finance.currencySymbol
  },
  {
    field: "Finance bitcoinAddress",
    semantic: { type: "category" },
    getRandomData: finance.bitcoinAddress
  },
  {
    field: "Finance litecoinAddress",
    semantic: { type: "category" },
    getRandomData: finance.litecoinAddress
  },
  {
    field: "Finance creditCardNumber",
    semantic: { type: "category" },
    getRandomData: finance.creditCardNumber
  },
  {
    field: "Finance creditCardCVV",
    semantic: { type: "category" },
    getRandomData: finance.creditCardCVV
  },
  {
    field: "Finance ethereumAddress",
    semantic: { type: "category" },
    getRandomData: finance.ethereumAddress
  },
  {
    field: "Finance iban",
    semantic: { type: "category" },
    getRandomData: finance.iban
  },
  {
    field: "Finance bic",
    semantic: { type: "category" },
    getRandomData: finance.bic
  },
  {
    field: "Finance transactionDescription",
    semantic: { type: "category" },
    getRandomData: finance.transactionDescription
  },
  {
    field: "Image image",
    semantic: { type: "url" },
    getRandomData: image.image
  },
  {
    field: "Image avatar",
    semantic: { type: "url" },
    getRandomData: image.avatar
  },
  {
    field: "Image imageUrl",
    semantic: { type: "url" },
    getRandomData: image.imageUrl
  },
  {
    field: "Image abstract",
    semantic: { type: "url" },
    getRandomData: image.abstract
  },
  {
    field: "Image animals",
    semantic: { type: "url" },
    getRandomData: image.animals
  },
  {
    field: "Image business",
    semantic: { type: "url" },
    getRandomData: image.business
  },
  {
    field: "Image cats",
    semantic: { type: "url" },
    getRandomData: image.cats
  },
  {
    field: "Image city",
    semantic: { type: "url" },
    getRandomData: image.city
  },
  {
    field: "Image food",
    semantic: { type: "url" },
    getRandomData: image.food
  },
  {
    field: "Image nightlife",
    semantic: { type: "url" },
    getRandomData: image.nightlife
  },
  {
    field: "Image fashion",
    semantic: { type: "url" },
    getRandomData: image.fashion
  },
  {
    field: "Image people",
    semantic: { type: "url" },
    getRandomData: image.people
  },
  {
    field: "Image nature",
    semantic: { type: "url" },
    getRandomData: image.nature
  },
  {
    field: "Image sports",
    semantic: { type: "url" },
    getRandomData: image.sports
  },
  {
    field: "Image technics",
    semantic: { type: "url" },
    getRandomData: image.technics
  },
  {
    field: "Image transport",
    semantic: { type: "url" },
    getRandomData: image.transport
  },
  {
    field: "Image dataUri",
    semantic: { type: "url" },
    getRandomData: image.dataUri
  }
  // { field: 'Image lorempixel', semantic: {type: 'url'}, getRandomData: image.lorempixel },
  // { field: 'Image unsplash', semantic: {type: 'url'}, getRandomData: image.unsplash },
  // { field: 'Image lorempicsum', semantic: {type: 'url'}, getRandomData: image.lorempicsum }
];
