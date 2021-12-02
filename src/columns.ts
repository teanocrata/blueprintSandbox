import faker from "faker";
import { ColumnI } from "./DataTable";

export const columns: Array<
  ColumnI & {
    getRandomData: () => number | string | Array<number> | Array<string> | null;
  }
> = [
  {
    field: "User name",
    semantic: { type: "category" },
    getRandomData: faker.name.findName
  },
  {
    field: "Estimated Salary",
    semantic: { type: "number" },
    getRandomData: faker.datatype.float
  },
  {
    field: "Country",
    semantic: { type: "category" },
    getRandomData: faker.address.country
  },
  {
    field: "User description",
    semantic: { type: "text" },
    getRandomData: faker.lorem.paragraph
  },
  {
    field: "Subscription date",
    semantic: { type: "date" },
    getRandomData: faker.datatype.datetime
  },
  {
    field: "Age",
    semantic: { type: "number " },
    getRandomData: () => Math.floor(Math.random() * 80)
  },
  {
    field: "Job title",
    semantic: { type: "category" },
    getRandomData: faker.name.jobTitle
  },
  {
    field: "Phone number",
    semantic: { type: "category" },
    getRandomData: faker.phone.phoneNumber
  },
  {
    field: "Zip Code",
    semantic: { type: "category" },
    getRandomData: faker.address.zipCode
  },
  {
    field: "City",
    semantic: { type: "category" },
    getRandomData: faker.address.city
  },
  {
    field: "Address",
    semantic: { type: "category" },
    getRandomData: faker.address.streetAddress
  },
  {
    field: "State",
    semantic: { type: "category" },
    getRandomData: faker.address.state
  },
  {
    field: "Latitude",
    semantic: { type: "number" },
    getRandomData: faker.address.latitude
  },
  {
    field: "Longitude",
    semantic: { type: "category" },
    getRandomData: faker.address.longitude
  },
  {
    field: "Nearby GPS Coodinate",
    semantic: { type: "object" },
    getRandomData: faker.address.nearbyGPSCoordinate
  },
  {
    field: "Time Zone",
    semantic: { type: "category" },
    getRandomData: faker.address.timeZone
  },
  {
    field: "Company name",
    semantic: { type: "category" },
    getRandomData: faker.company.companyName
  },
  {
    field: "Company catch phrase",
    semantic: { type: "category" },
    getRandomData: faker.company.catchPhrase
  },
  {
    field: "Company name",
    semantic: { type: "category" },
    getRandomData: faker.company.companyName
  },
  {
    field: "Card",
    semantic: { type: "object" },
    getRandomData: faker.helpers.contextualCard
  },
  {
    field: "Image",
    semantic: { type: "url" },
    getRandomData: faker.image.image
  },
  { field: "Cats", semantic: { type: "url" }, getRandomData: faker.image.cats },
  {
    field: "Address zipCode",
    semantic: { type: "category" },
    getRandomData: faker.address.zipCode
  },
  {
    field: "Address zipCodeByState",
    semantic: { type: "category" },
    getRandomData: faker.address.zipCodeByState
  },
  {
    field: "Address city",
    semantic: { type: "category" },
    getRandomData: faker.address.city
  },
  {
    field: "Address cityPrefix",
    semantic: { type: "category" },
    getRandomData: faker.address.cityPrefix
  },
  {
    field: "Address citySuffix",
    semantic: { type: "category" },
    getRandomData: faker.address.citySuffix
  },
  {
    field: "Address cityName",
    semantic: { type: "category" },
    getRandomData: faker.address.cityName
  },
  {
    field: "Address streetName",
    semantic: { type: "category" },
    getRandomData: faker.address.streetName
  },
  {
    field: "Address streetAddress",
    semantic: { type: "category" },
    getRandomData: faker.address.streetAddress
  },
  {
    field: "Address streetSuffix",
    semantic: { type: "category" },
    getRandomData: faker.address.streetSuffix
  },
  {
    field: "Address streetPrefix",
    semantic: { type: "category" },
    getRandomData: faker.address.streetPrefix
  },
  {
    field: "Address secondaryAddress",
    semantic: { type: "category" },
    getRandomData: faker.address.secondaryAddress
  },
  {
    field: "Address county",
    semantic: { type: "category" },
    getRandomData: faker.address.county
  },
  {
    field: "Address country",
    semantic: { type: "category" },
    getRandomData: faker.address.country
  },
  {
    field: "Address countryCode",
    semantic: { type: "category" },
    getRandomData: faker.address.countryCode
  },
  {
    field: "Address state",
    semantic: { type: "category" },
    getRandomData: faker.address.state
  },
  {
    field: "Address stateAbbr",
    semantic: { type: "category" },
    getRandomData: faker.address.stateAbbr
  },
  {
    field: "Address latitude",
    semantic: { type: "category" },
    getRandomData: faker.address.latitude
  },
  {
    field: "Address longitude",
    semantic: { type: "category" },
    getRandomData: faker.address.longitude
  },
  {
    field: "Address direction",
    semantic: { type: "category" },
    getRandomData: faker.address.direction
  },
  {
    field: "Address cardinalDirection",
    semantic: { type: "category" },
    getRandomData: faker.address.cardinalDirection
  },
  {
    field: "Address ordinalDirection",
    semantic: { type: "category" },
    getRandomData: faker.address.ordinalDirection
  },
  {
    field: "Address nearbyGPSCoordinate",
    semantic: { type: "category" },
    getRandomData: faker.address.nearbyGPSCoordinate
  },
  {
    field: "Address timeZone",
    semantic: { type: "category" },
    getRandomData: faker.address.timeZone
  },
  {
    field: "Animal dog",
    semantic: { type: "dog" },
    getRandomData: faker.animal.dog
  },
  {
    field: "Animal cat",
    semantic: { type: "cat" },
    getRandomData: faker.animal.cat
  },
  {
    field: "Animal snake",
    semantic: { type: "snake" },
    getRandomData: faker.animal.snake
  },
  {
    field: "Animal bear",
    semantic: { type: "bear" },
    getRandomData: faker.animal.bear
  },
  {
    field: "Animal lion",
    semantic: { type: "lion" },
    getRandomData: faker.animal.lion
  },
  {
    field: "Animal cetacean",
    semantic: { type: "cetacean" },
    getRandomData: faker.animal.cetacean
  },
  {
    field: "Animal horse",
    semantic: { type: "horse" },
    getRandomData: faker.animal.horse
  },
  {
    field: "Animal bird",
    semantic: { type: "bird" },
    getRandomData: faker.animal.bird
  },
  {
    field: "Animal cow",
    semantic: { type: "cow" },
    getRandomData: faker.animal.cow
  },
  {
    field: "Animal fish",
    semantic: { type: "fish" },
    getRandomData: faker.animal.fish
  },
  {
    field: "Animal crocodilia",
    semantic: { type: "crocodilia" },
    getRandomData: faker.animal.crocodilia
  },
  {
    field: "Animal insect",
    semantic: { type: "insect" },
    getRandomData: faker.animal.insect
  },
  {
    field: "Animal rabbit",
    semantic: { type: "rabbit" },
    getRandomData: faker.animal.rabbit
  },
  {
    field: "Animal type",
    semantic: { type: "type" },
    getRandomData: faker.animal.type
  },
  {
    field: "Commerce color",
    semantic: { type: "categoy" },
    getRandomData: faker.commerce.color
  },
  {
    field: "Commerce department",
    semantic: { type: "categoy" },
    getRandomData: faker.commerce.department
  },
  {
    field: "Commerce productName",
    semantic: { type: "categoy" },
    getRandomData: faker.commerce.productName
  },
  {
    field: "Commerce price",
    semantic: { type: "categoy" },
    getRandomData: faker.commerce.price
  },
  {
    field: "Commerce productAdjective",
    semantic: { type: "categoy" },
    getRandomData: faker.commerce.productAdjective
  },
  {
    field: "Commerce productMaterial",
    semantic: { type: "categoy" },
    getRandomData: faker.commerce.productMaterial
  },
  {
    field: "Commerce product",
    semantic: { type: "categoy" },
    getRandomData: faker.commerce.product
  },
  {
    field: "Commerce productDescription",
    semantic: { type: "categoy" },
    getRandomData: faker.commerce.productDescription
  },
  {
    field: "Company suffixes",
    semantic: { type: "category" },
    getRandomData: faker.company.suffixes
  },
  {
    field: "Company companyName",
    semantic: { type: "category" },
    getRandomData: faker.company.companyName
  },
  {
    field: "Company companySuffix",
    semantic: { type: "category" },
    getRandomData: faker.company.companySuffix
  },
  {
    field: "Company catchPhrase",
    semantic: { type: "category" },
    getRandomData: faker.company.catchPhrase
  },
  {
    field: "Company bs",
    semantic: { type: "category" },
    getRandomData: faker.company.bs
  },
  {
    field: "Company catchPhraseAdjective",
    semantic: { type: "category" },
    getRandomData: faker.company.catchPhraseAdjective
  },
  {
    field: "Company catchPhraseDescriptor",
    semantic: { type: "category" },
    getRandomData: faker.company.catchPhraseDescriptor
  },
  {
    field: "Company catchPhraseNoun",
    semantic: { type: "category" },
    getRandomData: faker.company.catchPhraseNoun
  },
  {
    field: "Company bsAdjective",
    semantic: { type: "category" },
    getRandomData: faker.company.bsAdjective
  },
  {
    field: "Company bsBuzz",
    semantic: { type: "category" },
    getRandomData: faker.company.bsBuzz
  },
  {
    field: "Company bsNoun",
    semantic: { type: "category" },
    getRandomData: faker.company.bsNoun
  },
  {
    field: "Database column",
    semantic: { type: "category" },
    getRandomData: faker.database.column
  },
  {
    field: "Database type",
    semantic: { type: "category" },
    getRandomData: faker.database.type
  },
  {
    field: "Database collation",
    semantic: { type: "category" },
    getRandomData: faker.database.collation
  },
  {
    field: "Database engine",
    semantic: { type: "category" },
    getRandomData: faker.database.engine
  },
  {
    field: "Datatype number",
    semantic: { type: "category" },
    getRandomData: faker.datatype.number
  },
  {
    field: "Datatype float",
    semantic: { type: "category" },
    getRandomData: faker.datatype.float
  },
  {
    field: "Datatype datetime",
    semantic: { type: "category" },
    getRandomData: faker.datatype.datetime
  },
  {
    field: "Datatype string",
    semantic: { type: "category" },
    getRandomData: faker.datatype.string
  },
  {
    field: "Datatype uuid",
    semantic: { type: "category" },
    getRandomData: faker.datatype.uuid
  },
  {
    field: "Datatype boolean",
    semantic: { type: "category" },
    getRandomData: faker.datatype.boolean
  },
  {
    field: "Datatype hexaDecimal",
    semantic: { type: "category" },
    getRandomData: faker.datatype.hexaDecimal
  },
  {
    field: "Datatype json",
    semantic: { type: "category" },
    getRandomData: faker.datatype.json
  },
  {
    field: "Datatype array",
    semantic: { type: "category" },
    getRandomData: faker.datatype.array
  },
  {
    field: "Date past",
    semantic: { type: "category" },
    getRandomData: faker.date.past
  },
  {
    field: "Date future",
    semantic: { type: "category" },
    getRandomData: faker.date.future
  },
  {
    field: "Date between",
    semantic: { type: "category" },
    getRandomData: faker.date.between
  },
  {
    field: "Date betweens",
    semantic: { type: "category" },
    getRandomData: faker.date.betweens
  },
  {
    field: "Date recent",
    semantic: { type: "category" },
    getRandomData: faker.date.recent
  },
  {
    field: "Date soon",
    semantic: { type: "category" },
    getRandomData: faker.date.soon
  },
  {
    field: "Date month",
    semantic: { type: "category" },
    getRandomData: faker.date.month
  },
  {
    field: "Date weekday",
    semantic: { type: "category" },
    getRandomData: faker.date.weekday
  },
  {
    field: "Finance account",
    semantic: { type: "category" },
    getRandomData: faker.finance.account
  },
  {
    field: "Finance accountName",
    semantic: { type: "category" },
    getRandomData: faker.finance.accountName
  },
  {
    field: "Finance routingNumber",
    semantic: { type: "category" },
    getRandomData: faker.finance.routingNumber
  },
  {
    field: "Finance mask",
    semantic: { type: "category" },
    getRandomData: faker.finance.mask
  },
  {
    field: "Finance amount",
    semantic: { type: "category" },
    getRandomData: faker.finance.amount
  },
  {
    field: "Finance transactionType",
    semantic: { type: "category" },
    getRandomData: faker.finance.transactionType
  },
  {
    field: "Finance currencyCode",
    semantic: { type: "category" },
    getRandomData: faker.finance.currencyCode
  },
  {
    field: "Finance currencyName",
    semantic: { type: "category" },
    getRandomData: faker.finance.currencyName
  },
  {
    field: "Finance currencySymbol",
    semantic: { type: "category" },
    getRandomData: faker.finance.currencySymbol
  },
  {
    field: "Finance bitcoinAddress",
    semantic: { type: "category" },
    getRandomData: faker.finance.bitcoinAddress
  },
  {
    field: "Finance litecoinAddress",
    semantic: { type: "category" },
    getRandomData: faker.finance.litecoinAddress
  },
  {
    field: "Finance creditCardNumber",
    semantic: { type: "category" },
    getRandomData: faker.finance.creditCardNumber
  },
  {
    field: "Finance creditCardCVV",
    semantic: { type: "category" },
    getRandomData: faker.finance.creditCardCVV
  },
  {
    field: "Finance ethereumAddress",
    semantic: { type: "category" },
    getRandomData: faker.finance.ethereumAddress
  },
  {
    field: "Finance iban",
    semantic: { type: "category" },
    getRandomData: faker.finance.iban
  },
  {
    field: "Finance bic",
    semantic: { type: "category" },
    getRandomData: faker.finance.bic
  },
  {
    field: "Finance transactionDescription",
    semantic: { type: "category" },
    getRandomData: faker.finance.transactionDescription
  },
  {
    field: "Image image",
    semantic: { type: "url" },
    getRandomData: faker.image.image
  },
  {
    field: "Image avatar",
    semantic: { type: "url" },
    getRandomData: faker.image.avatar
  },
  {
    field: "Image imageUrl",
    semantic: { type: "url" },
    getRandomData: faker.image.imageUrl
  },
  {
    field: "Image abstract",
    semantic: { type: "url" },
    getRandomData: faker.image.abstract
  },
  {
    field: "Image animals",
    semantic: { type: "url" },
    getRandomData: faker.image.animals
  },
  {
    field: "Image business",
    semantic: { type: "url" },
    getRandomData: faker.image.business
  },
  {
    field: "Image cats",
    semantic: { type: "url" },
    getRandomData: faker.image.cats
  },
  {
    field: "Image city",
    semantic: { type: "url" },
    getRandomData: faker.image.city
  },
  {
    field: "Image food",
    semantic: { type: "url" },
    getRandomData: faker.image.food
  },
  {
    field: "Image nightlife",
    semantic: { type: "url" },
    getRandomData: faker.image.nightlife
  },
  {
    field: "Image fashion",
    semantic: { type: "url" },
    getRandomData: faker.image.fashion
  },
  {
    field: "Image people",
    semantic: { type: "url" },
    getRandomData: faker.image.people
  },
  {
    field: "Image nature",
    semantic: { type: "url" },
    getRandomData: faker.image.nature
  },
  {
    field: "Image sports",
    semantic: { type: "url" },
    getRandomData: faker.image.sports
  },
  {
    field: "Image technics",
    semantic: { type: "url" },
    getRandomData: faker.image.technics
  },
  {
    field: "Image transport",
    semantic: { type: "url" },
    getRandomData: faker.image.transport
  },
  {
    field: "Image dataUri",
    semantic: { type: "url" },
    getRandomData: faker.image.dataUri
  }
  // { field: 'Image lorempixel', semantic: {type: 'url'}, getRandomData: faker.image.lorempixel },
  // { field: 'Image unsplash', semantic: {type: 'url'}, getRandomData: faker.image.unsplash },
  // { field: 'Image lorempicsum', semantic: {type: 'url'}, getRandomData: faker.image.lorempicsum }
];
