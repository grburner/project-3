const mongoose = require('mongoose');
const db = require('../models');

//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/marketplace");
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/marketplace');

const userSeed = [
  { _id: 'ObjectId("5f90df97d56aef06bcb010cb")', name: 'Mattie Poquette', email: 'mattie@aol.com', role: 'consumer', password: 'password', address_street1: '73 State Road 434 E', address_street2: '1st floor', address_city: 'Phoenix', address_state: 'AZ', address_zip: '85013', phone_number: '602-277-4385', birth_date: '12/1/1995', favorites: [{product_id: 'ObjectId("5f90e02f0f4cef1b1ca22785")'},  {product_id: 'ObjectId("5f90e02f0f4cef1b1ca22786")'}, {product_id: 'ObjectId("5f90e02f0f4cef1b1ca22788")'}, {product_id: 'ObjectId("5f90e02f0f4cef1b1ca2279d")'}, {product_id: 'ObjectId("5f90e02f0f4cef1b1ca227aa")'}] },
  { _id: 'ObjectId("5f90df97d56aef06bcb010cc")', name: 'Meaghan Garufi', email: 'meaghan@hotmail.com', role: 'consumer', password: 'password', address_street1: '69734 E Carrillo St', address_street2: '', address_city: 'Mc Minnville', address_state: 'TN', address_zip: '37110', phone_number: '931-313-9635', birth_date: '10/10/1999', favorites: [{product_id: 'ObjectId("5f90e02f0f4cef1b1ca22789")'},  {product_id: 'ObjectId("5f90e02f0f4cef1b1ca2278f")'}, {product_id: 'ObjectId("5f90e02f0f4cef1b1ca2278a")'}, {product_id: 'ObjectId("5f90e02f0f4cef1b1ca22785")'}, {product_id: 'ObjectId("5f90e02f0f4cef1b1ca22784")'}] },
  { _id: 'ObjectId("5f90df97d56aef06bcb010cd")', name: 'Gladys Rim', email: 'gladys.rim@rim.org', role: 'consumer', password: 'password', address_street1: '322 New Horizon Blvd', address_street2: 'Apt C', address_city: 'Milwaukee', address_state: 'WI', address_zip: '53207', phone_number: '414-661-9598', birth_date: '4/1/1948', favorites: [{product_id: 'ObjectId("5f90e02f0f4cef1b1ca22792")'},  {product_id: 'ObjectId("5f90e02f0f4cef1b1ca22787")'}, {product_id: 'ObjectId("5f90e02f0f4cef1b1ca22793")'}, {product_id: 'ObjectId("5f90e02f0f4cef1b1ca22795")'}, {product_id: 'ObjectId("5f90e02f0f4cef1b1ca22797")'}] },
  { _id: 'ObjectId("5f90df97d56aef06bcb010ce")', name: 'Yuki Whobrey', email: 'yuki_whobrey@aol.com', role: 'consumer', password: 'password', address_street1: '1 State Route 27', address_street2: '', address_city: 'Taylor', address_state: 'MI', address_zip: '48180', phone_number: '313-288-7937', birth_date: '5/5/1992', favorites: [{product_id: 'ObjectId("5f90e02f0f4cef1b1ca22789")'},  {product_id: 'ObjectId("5f90e02f0f4cef1b1ca2278e")'}, {product_id: 'ObjectId("5f90e02f0f4cef1b1ca2278c")'}, {product_id: 'ObjectId("5f90e02f0f4cef1b1ca22794")'}, {product_id: 'ObjectId("5f90e02f0f4cef1b1ca22785")'}] },
  { _id: 'ObjectId("5f90df97d56aef06bcb010cf")', name: 'Fletcher Flosi', email: 'fletcher.flosi@yahoo.com', role: 'consumer', password: 'password', address_street1: '394 Manchester Blvd', address_street2: '', address_city: 'Rockford', address_state: 'IL', address_zip: '61109', phone_number: '815-828-2147', birth_date: '7/3/1987', favorites: [{product_id: 'ObjectId("5f90e02f0f4cef1b1ca22790")'},  {product_id: 'ObjectId("5f90e02f0f4cef1b1ca22796")'}, {product_id: 'ObjectId("5f90e02f0f4cef1b1ca22798")'}, {product_id: 'ObjectId("5f90e02f0f4cef1b1ca22784")'}, {product_id: 'ObjectId("5f90e02f0f4cef1b1ca22792")'}] },
  { _id: 'ObjectId("5f90df97d56aef06bcb010d0")', name: 'Bette Nicka', email: 'bette_nicka@cox.net', role: 'consumer', password: 'password', address_street1: '6 S 33rd St', address_street2: 'Ste 606', address_city: 'Aston', address_state: 'PA', address_zip: '19014', phone_number: '610-545-3615', birth_date: '3/25/1990', favorites: [{product_id: 'ObjectId("5f90e02f0f4cef1b1ca22786")'},  {product_id: 'ObjectId("5f90e02f0f4cef1b1ca22799")'}, {product_id: 'ObjectId("5f90e02f0f4cef1b1ca2279a")'}, {product_id: 'ObjectId("5f90e02f0f4cef1b1ca2279d")'}, {product_id: 'ObjectId("5f90e02f0f4cef1b1ca22789")'}] },
  { _id: 'ObjectId("5f90df97d56aef06bcb010d1")', name: 'Veronika Inouye', email: 'vinouye@aol.com', role: 'consumer', password: 'password', address_street1: '6 Greenleaf Ave', address_street2: 'Apt 3', address_city: 'San Jose', address_state: 'CA', address_zip: '95111', phone_number: '408-540-1785', birth_date: '9/4/1978', favorites: [{product_id: 'ObjectId("5f90e02f0f4cef1b1ca2278b")'},  {product_id: 'ObjectId("5f90e02f0f4cef1b1ca2278a")'}, {product_id: 'ObjectId("5f90e02f0f4cef1b1ca22791")'}, {product_id: 'ObjectId("5f90e02f0f4cef1b1ca22797")'}, {product_id: 'ObjectId("5f90e02f0f4cef1b1ca22799")'}]},
  { _id: 'ObjectId("5f90df97d56aef06bcb010d2")', name: 'Willard Kolmetz', email: 'willard@hotmail.com', role: 'consumer', password: 'password', address_street1: '618 W Yakima Ave', address_street2: '', address_city: 'Irving', address_state: 'TX', address_zip: '75062', phone_number: '972-303-9197', birth_date: '10/9/1998', favorites: [{product_id: 'ObjectId("5f90e02f0f4cef1b1ca2278d")'},  {product_id: 'ObjectId("5f90e02f0f4cef1b1ca22784")'}, {product_id: 'ObjectId("5f90e02f0f4cef1b1ca22788")'}, {product_id: 'ObjectId("5f90e02f0f4cef1b1ca22790")'}, {product_id: 'ObjectId("5f90e02f0f4cef1b1ca2278c")'}] },
  { _id: 'ObjectId("5f90df97d56aef06bcb010d3")', name: 'Jose Stockham', email: 'jose@yahoo.com', role: 'retailer', password: 'password', company_name: 'Tri State Wine Co', address_street1: '128 Bransten Rd', address_street2: '2nd driveway', address_city: 'New York', address_state: 'NY', address_zip: '10011', phone_number: '212-675-8570', ships_to: ['NY', 'PA', 'VT'] },
  { _id: 'ObjectId("5f90df97d56aef06bcb010d4")', name: 'Rozella Ostrosky', email: 'rozella.ostrosky@ostrosky.com', role: 'retailer', password: 'password', company_name: 'Parkway Winery', address_street1: '17 Morena Blvd', address_street2: '', address_city: 'Camarillo', address_state: 'CA', address_zip: '93012', phone_number: '805-832-6163', ships_to: ['CA', 'WA', 'NV'] },
  { _id: 'ObjectId("5f90df97d56aef06bcb010d5")', name: 'Valentine Gillian', email: 'valentine_gillian@gmail.com', role: 'retailer', password: 'password', company_name: 'Red, White, and Rose!', address_street1: '775 W 17th St', address_street2: 'Ste 8003', address_city: 'San Antonio', address_state: 'TX', address_zip: '78204', phone_number: '210-812-9597', ships_to: ['TX'] },
  { _id: 'ObjectId("5f90df97d56aef06bcb010d6")', name: 'Kati Rulapaugh', email: 'kati.rulapaugh@hotmail.com', role: 'retailer', password: 'password', company_name: 'ChardonYAY', address_street1: '6980 Dorsett Rd', address_street2: '1st floor', address_city: 'Abilene', address_state: 'KS', address_zip: '67410', phone_number: '785-463-7829', ships_to: ['KS', 'KY', 'FL', 'LA'] },
  { _id: 'ObjectId("5f90def5747f0b4e289d05e9")', name: 'Youlanda Schemmer', email: 'youlanda@aol.com', role: 'retailer', password: 'password', company_name: 'Prineville Vinyards', address_street1: '2881 Lewis Rd', address_street2: '', address_city: 'Prineville', address_state: 'OR', address_zip: '97754', phone_number: '541-548-8197', ships_to: ['OR', 'CA', 'WA'] }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(`${data.result.n} User records inserted!`);
    //process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const productSeed = [
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca22784")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d3")', name: 'MOTHER ROCK', description: 'a delicious wine', country: 'ZA', geo2: 'geo2', type1: 'white', type2: 'still', size: '750mL', grape_blend: 'concord', units: 15, price: 29.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca22785")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d4")', name: 'LOURENS WHITE BLEND', description: 'a delicious wine', country: 'ZA', geo2: 'geo2', type1: 'white', type2: 'still', size: '750mL', grape_blend: 'concord', units: 19, price: 34.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca22786")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d5")', name: 'STORM POINT CHENIN BLANC', description: 'a delicious wine', country: 'ZA', geo2: 'geo2', type1: 'white', type2: 'still', size: '750mL', grape_blend: 'concord', units: 9, price: 19.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca22787")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d5")', name: 'WEST & WILDER CHENIN BLANC CAN', description: 'a delicious wine', country: 'US', geo2: 'geo2', type1: 'white', type2: 'still', size: '750mL', grape_blend: 'concord', units: 5, price: 9.00},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca22788")', retailer_id: 'ObjectId("5f90def5747f0b4e289d05e9")', name: 'VIN DE DAYS BLANC BRIANNE DAY', description: 'a delicious wine', country: 'US', geo2: 'geo2', type1: 'white', type2: 'still', size: '750mL', grape_blend: 'concord', units: 17, price: 29.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca22789")', retailer_id: 'ObjectId("5f90def5747f0b4e289d05e9")', name: 'BACCHUS CHARDONNAY', description: 'a delicious wine', country: 'US', geo2: 'geo2', type1: 'white', type2: 'still', size: '750mL', grape_blend: 'concord', units: 9, price: 19.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca2278a")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d6")', name: 'BLOOMER CREEK BLACK CAP EDELZWICKER', description: 'a delicious wine', country: 'US', geo2: 'geo2', type1: 'white', type2: 'still', size: '750mL', grape_blend: 'concord', units: 17, price: 29.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca2278b")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d3")', name: 'LAS LILAS VINHO VERDE', description: 'a delicious wine', country: 'PT', geo2: 'geo2', type1: 'white', type2: 'still', size: '750mL', grape_blend: 'concord', units: 10, price: 19.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca2278c")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d6")', name: 'AUNTSFIELD CHARDONNAY', description: 'a delicious wine', country: 'NZ', geo2: 'geo2', type1: 'white', type2: 'still', size: '750mL', grape_blend: 'concord', units: 17, price: 29.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca2278d")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d6")', name: 'AUNTSFIELD SAUVIGNON BLANC', description: 'a delicious wine', country: 'NZ', geo2: 'geo2', type1: 'white', type2: 'still', size: '750mL', grape_blend: 'concord', units: 13, price: 24.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca2278e")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d5")', name: 'MOUNT RILEY SAUVIGNON BLANC', description: 'a delicious wine', country: 'NZ', geo2: 'geo2', type1: 'white', type2: 'still', size: '750mL', grape_blend: 'concord', units: 13, price: 22.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca2278f")', retailer_id: 'ObjectId("5f90def5747f0b4e289d05e9")', name: 'ELLENA NASCHETTA', description: 'a delicious wine', country: 'IT', geo2: 'geo2', type1: 'white', type2: 'still', size: '750mL', grape_blend: 'concord', units: 11, price: 21.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca22790")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d6")', name: 'BELLA VITA PINOT GRIGIO', description: 'a delicious wine', country: 'IT', geo2: 'geo2', type1: 'white', type2: 'still', size: '750mL', grape_blend: 'concord', units: 9, price: 16.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca22791")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d3")', name: 'ALCESTI ISOLA BIANCO', description: 'a delicious wine', country: 'IT', geo2: 'geo2', type1: 'white', type2: 'still', size: '750mL', grape_blend: 'concord', units: 12, price: 19.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca22792")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d3")', name: 'ARIANNA OCCHIPINTI SP68 BIANCO', description: 'a delicious wine', country: 'IT', geo2: 'geo2', type1: 'white', type2: 'still', size: '750mL', grape_blend: 'concord', units: 28, price: 44.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca22793")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d5")', name: 'GADAIS MUSCADET', description: 'a delicious wine', country: 'FR', geo2: 'geo2', type1: 'white', type2: 'still', size: '750mL', grape_blend: 'concord', units: 12, price: 21.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca22794")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d4")', name: 'BORDEAUX BLANC MARY TAYLOR', description: 'a delicious wine', country: 'FR', geo2: 'geo2', type1: 'white', type2: 'still', size: '750mL', grape_blend: 'concord', units: 13, price: 22.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca22795")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d4")', name: 'SANCERRE LAUVERJAT', description: 'a delicious wine', country: 'FR', geo2: 'geo2', type1: 'white', type2: 'still', size: '750mL', grape_blend: 'concord', units: 21, price: 39.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca22796")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d4")', name: 'LAUVERJAT SANCERRE', description: 'a delicious wine', country: 'FR', geo2: 'geo2', type1: 'white', type2: 'sparkling', size: '750mL', grape_blend: 'concord', units: 13, price: 21.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca22797")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d5")', name: 'GULP HABLO VERDEJO', description: 'a delicious wine', country: 'ES', geo2: 'geo2', type1: 'white', type2: 'sparkling', size: '750mL', grape_blend: 'concord', units: 10, price: 19.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca22798")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d6")', name: 'ANTXIOLA TXAKOLINA', description: 'a delicious wine', country: 'ES', geo2: 'geo2', type1: 'white', type2: 'sparkling', size: '750mL', grape_blend: 'concord', units: 16, price: 29.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca22799")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d3")', name: 'SELBACH RIESLING INCLINE', description: 'a delicious wine', country: 'DE', geo2: 'geo2', type1: 'white', type2: 'sparkling', size: '750mL', grape_blend: 'concord', units: 12, price: 21.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca2279a")', retailer_id: 'ObjectId("5f90def5747f0b4e289d05e9")', name: 'JAKOB SCHNEIDER RIESLING KABINETT', description: 'a delicious wine', country: 'DE', geo2: 'geo2', type1: 'white', type2: 'sparkling', size: '750mL', grape_blend: 'concord', units: 16, price: 28.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca2279b")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d3")', name: 'PRISMA SAUVIGNON BLANC', description: 'a delicious wine', country: 'CL', geo2: 'geo2', type1: 'white', type2: 'sparkling', size: '750mL', grape_blend: 'concord', units: 13, price: 19.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca2279c")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d4")', name: 'TORRE RRACINA NERO D\'AVOLA', description: 'a delicious wine', country: 'IT', geo2: 'geo2', type1: 'red', type2: 'sparkling', size: '750mL', grape_blend: 'concord', units: 10, price: 19.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca2279d")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d4")', name: 'MAGNUM BELLA VITA PINOT GRIGIO', description: 'a delicious wine', country: 'IT', geo2: 'geo2', type1: 'red', type2: 'sparkling', size: '750mL', grape_blend: 'concord', units: 16, price: 29.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca2279e")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d5")', name: 'CHIARA CONDELLO SANGIOVESE', description: 'a delicious wine', country: 'IT', geo2: 'geo2', type1: 'red', type2: 'sparkling', size: '750mL', grape_blend: 'concord', units: 18, price: 29.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca2279f")', retailer_id: 'ObjectId("5f90def5747f0b4e289d05e9")', name: 'PACE BARBERA D\'ALBA', description: 'a delicious wine', country: 'IT', geo2: 'geo2', type1: 'red', type2: 'sparkling', size: '750mL', grape_blend: 'concord', units: 13, price: 21.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca227a0")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d6")', name: 'LAMBUSCO QUARESIMO', description: 'a delicious wine', country: 'IT', geo2: 'geo2', type1: 'red', type2: 'still', size: '750mL', grape_blend: 'concord', units: 17, price: 29.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca227a1")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d5")', name: 'DOMAINE DES MOIROTS BOURGOGNE PINOT', description: 'a delicious wine', country: 'FR', geo2: 'geo2', type1: 'red', type2: 'still', size: '750mL', grape_blend: 'concord', units: 20, price: 36.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca227a2")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d4")', name: 'BEAUJOLAIS LES GRIOTTES PIERRE-MARI', description: 'a delicious wine', country: 'FR', geo2: 'geo2', type1: 'red', type2: 'still', size: '750mL', grape_blend: 'concord', units: 15, price: 26.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca227a3")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d3")', name: 'CEDRUS MARCEL MALBEC', description: 'a delicious wine', country: 'FR', geo2: 'geo2', type1: 'red', type2: 'still', size: '750mL', grape_blend: 'concord', units: 13, price: 21.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca227a4")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d3")', name: 'NICOLAS REAU ENLEVEMENT', description: 'a delicious wine', country: 'FR', geo2: 'geo2', type1: 'red', type2: 'still', size: '750mL', grape_blend: 'concord', units: 22, price: 39.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca227a5")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d6")', name: 'CHATEAU LES GRAVIERES BORDEAUX SUPER', description: 'a delicious wine', country: 'FR', geo2: 'geo2', type1: 'red', type2: 'still', size: '750mL', grape_blend: 'concord', units: 12, price: 24.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca227a6")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d4")', name: 'GAMA SUTRA OLIVIER LEMASSON', description: 'a delicious wine', country: 'FR', geo2: 'geo2', type1: 'red', type2: 'still', size: '750mL', grape_blend: 'concord', units: 24, price: 39.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca227a7")', retailer_id: 'ObjectId("5f90def5747f0b4e289d05e9")', name: 'DOMAINE DU JAS COTES DU RHONE', description: 'a delicious wine', country: 'FR', geo2: 'geo2', type1: 'red', type2: 'still', size: '750mL', grape_blend: 'concord', units: 16, price: 29.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca227a8")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d4")', name: 'BODEGAS SENORIO DE BARAHONDA CARRO', description: 'a delicious wine', country: 'ES', geo2: 'geo2', type1: 'red', type2: 'still', size: '750mL', grape_blend: 'concord', units: 12, price: 19.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca227a9")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d5")', name: 'MURIEL RIOJA', description: 'a delicious wine', country: 'ES', geo2: 'geo2', type1: 'red', type2: 'still', size: '750mL', grape_blend: 'concord', units: 12, price: 21.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca227aa")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d6")', name: 'CHONO CARMENERE', description: 'a delicious wine', country: 'CL', geo2: 'geo2', type1: 'red', type2: 'still', size: '750mL', grape_blend: 'concord', units: 11, price: 19.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca227ab")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d3")', name: 'SMALL GULLY VYDS. SHIRAZ MR. BLACKS', description: 'a delicious wine', country: 'AU', geo2: 'geo2', type1: 'red', type2: 'still', size: '750mL', grape_blend: 'concord', units: 10, price: 21.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca227ac")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d5")', name: 'ZWEIGELT VORSPANNHOF MAYR', description: 'a delicious wine', country: 'AT', geo2: 'geo2', type1: 'red', type2: 'still', size: '750mL', grape_blend: 'concord', units: 14, price: 24.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca227ad")', retailer_id: 'ObjectId("5f90def5747f0b4e289d05e9")', name: 'RJ VINEDOS MALBEC MDZ', description: 'a delicious wine', country: 'AR', geo2: 'geo2', type1: 'red', type2: 'still', size: '750mL', grape_blend: 'concord', units: 11, price: 19.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca227ae")', retailer_id: 'ObjectId("5f90def5747f0b4e289d05e9")', name: 'SEEDS & SKINS OLD WESTMINSTER', description: 'a delicious wine', country: 'US', geo2: 'geo2', type1: 'orange', type2: 'still', size: '750mL', grape_blend: 'concord', units: 8, price: 13.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca227af")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d6")', name: 'RAMATO PINOT GRIGIO MATTEO BRAIDOT', description: 'a delicious wine', country: 'IT', geo2: 'geo2', type1: 'orange', type2: 'still', size: '750mL', grape_blend: 'concord', units: 8, price: 17.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca227b0")', retailer_id: 'ObjectId("5f90def5747f0b4e289d05e9")', name: 'LO-FI DRY VERMOUTH', description: 'a delicious wine', country: 'US', geo2: 'geo2', type1: 'fortified', type2: 'still', size: '750mL', grape_blend: 'concord', units: 19, price: 34.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca227b1")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d3")', name: 'LAS LILAS VINHO VERDE ROSE', description: 'a delicious wine', country: 'PT', geo2: 'geo2', type1: 'rose', type2: 'still', size: '750mL', grape_blend: 'concord', units: 13, price: 19.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca227b2")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d6")', name: 'DE ANGELIS ROSE MARCHE', description: 'a delicious wine', country: 'IT', geo2: 'geo2', type1: 'rose', type2: 'still', size: '750mL', grape_blend: 'concord', units: 13, price: 24.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca227b3")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d4")', name: 'A VITA CALABRIA ROSATO', description: 'a delicious wine', country: 'IT', geo2: 'geo2', type1: 'rose', type2: 'still', size: '750mL', grape_blend: 'concord', units: 17, price: 29.99},
  { _id: 'ObjectId("5f90e02f0f4cef1b1ca227b4")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d5")', name: 'LA BELLE ETOILE ROSE', description: 'a delicious wine', country: 'FR', geo2: 'geo2', type1: 'rose', type2: 'still', size: '750mL', grape_blend: 'concord', units: 11, price: 21.99}
];

db.Product
  .remove({})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then(data => {
    console.log(`${data.result.n} Product records inserted!`);
    //process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  const orderSeed = [
    { user_id: 'ObjectId("5f90df97d56aef06bcb010cb")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d3")', date: '9/2/2020', status: 'closed', detail: [ { product_id: 'ObjectId("5f90e02f0f4cef1b1ca22784")', quantity: 2, price: 29.99 }, { product_id: 'ObjectId("5f90e02f0f4cef1b1ca2278b")', quantity: 4, price: 19.99 } ] },

    { user_id: 'ObjectId("5f90df97d56aef06bcb010cc")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d5")', date: '9/5/2020', status: 'closed', detail: [ { product_id: 'ObjectId("5f90e02f0f4cef1b1ca22787")', quantity: 6, price: 9.00 } ] },

    { user_id: 'ObjectId("5f90df97d56aef06bcb010cd")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d5")', date: '10/20/2020', status: 'pending', detail: [ { product_id: 'ObjectId("5f90e02f0f4cef1b1ca22787")', quantity: 2, price: 9.99 }, { product_id: 'ObjectId("5f90e02f0f4cef1b1ca2278e")', quantity: 1, price: 22.99 }, { product_id: 'ObjectId("5f90e02f0f4cef1b1ca22793")', quantity: 1, price: 21.99 } ] },

    { user_id: 'ObjectId("5f90df97d56aef06bcb010cf")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d4")', date: '10/19/2020', status: 'open', detail: [ { product_id: 'ObjectId("5f90e02f0f4cef1b1ca22794")', quantity: 2, price: 22.99 }, { product_id: 'ObjectId("5f90e02f0f4cef1b1ca22795")', quantity: 1, price: 39.99 } ] },

    { user_id: 'ObjectId("5f90df97d56aef06bcb010cb")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d4")', date: '10/14/2020', status: 'open', detail: [ { product_id: 'ObjectId("5f90e02f0f4cef1b1ca22795")', quantity: 4, price: 39.99 } ] },

    { user_id: 'ObjectId("5f90df97d56aef06bcb010cd")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d3")', date: '10/10/10', status: 'closed', detail: [ { product_id: 'ObjectId("5f90e02f0f4cef1b1ca22784")', quantity: 6, price: 29.99 } ] },

    { user_id: 'ObjectId("5f90df97d56aef06bcb010ce")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d6")', date: '9/30/2020', status: 'closed', detail: [ { product_id: 'ObjectId("5f90e02f0f4cef1b1ca22798")', quantity: 6, price: 29.99 }, { product_id: 'ObjectId("5f90e02f0f4cef1b1ca227a0")', quantity: 4, price: 29.99 } ] },

    { user_id: 'ObjectId("5f90df97d56aef06bcb010cf")', retailer_id: 'ObjectId("5f90df97d56aef06bcb010d6")', date: '10/2/2020', status: 'closed', detail: [ { product_id: 'ObjectId("5f90e02f0f4cef1b1ca227a5")', quantity: 3, price: 24.99 }, { product_id: 'ObjectId("5f90e02f0f4cef1b1ca227aa")', quantity: 3, price: 21.99 } ] },

    { user_id: 'ObjectId("5f90df97d56aef06bcb010cc")', retailer_id: 'ObjectId("5f90def5747f0b4e289d05e9")', date: '10/22/2020', status: 'pending', detail: [ { product_id: 'ObjectId("5f90e02f0f4cef1b1ca227a7")', quantity: 2, price: 29.99 } ] },

    { user_id: 'ObjectId("5f90df97d56aef06bcb010ce")', retailer_id: 'ObjectId("5f90def5747f0b4e289d05e9")', date: '10/15/2020', status: 'closed', detail: [ { product_id: 'ObjectId("5f90e02f0f4cef1b1ca227a7")', quantity: 1, price: 29.99 }, { product_id: 'ObjectId("5f90e02f0f4cef1b1ca227ad")', quantity: 3, price: 19.99 }, { product_id: 'ObjectId("5f90e02f0f4cef1b1ca227ae")', quantity: 6, price: 13.99 }, { product_id: 'ObjectId("5f90e02f0f4cef1b1ca227b0")', quantity: 2, price: 34.99 } ] },

    { user_id: 'ObjectId("5f90df97d56aef06bcb010cc")', retailer_id: 'ObjectId("5f90def5747f0b4e289d05e9")', date: '10/21/2020', status: 'open', detail: [ { product_id: 'ObjectId("5f90e02f0f4cef1b1ca227a7")', quantity: 12, price: 29.99 }, { product_id: 'ObjectId("5f90e02f0f4cef1b1ca227ad")', quantity: 12, price: 19.99 } ] }
  ]
  
  db.Order
    .remove({})
    .then(() => db.Order.collection.insertMany(orderSeed))
    .then(data => {
      console.log(`${data.result.n} Order records inserted!`);
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });