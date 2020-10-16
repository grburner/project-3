const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/marketplace");

const productSeed = [
    {name: "MOTHER ROCK", description: "a delicious wine", country: "ZA", geo2: "geo2", type1: "white", type2: "still", size: "750mL", grape_blend: "concord", units: 15, price: 29.99},
    {name: "LOURENS WHITE BLEND", description: "a delicious wine", country: "ZA", geo2: "geo2", type1: "white", type2: "still", size: "750mL", grape_blend: "concord", units: 19, price: 34.99},
    {name: "STORM POINT CHENIN BLANC", description: "a delicious wine", country: "ZA", geo2: "geo2", type1: "white", type2: "still", size: "750mL", grape_blend: "concord", units: 9, price: 19.99},
    {name: "WEST & WILDER CHENIN BLANC CAN", description: "a delicious wine", country: "US", geo2: "geo2", type1: "white", type2: "still", size: "750mL", grape_blend: "concord", units: 5, price: 9},
    {name: "VIN DE DAYS BLANC BRIANNE DAY", description: "a delicious wine", country: "US", geo2: "geo2", type1: "white", type2: "still", size: "750mL", grape_blend: "concord", units: 17, price: 29.99},
    {name: "BACCHUS CHARDONNAY", description: "a delicious wine", country: "US", geo2: "geo2", type1: "white", type2: "still", size: "750mL", grape_blend: "concord", units: 9, price: 19.99},
    {name: "BLOOMER CREEK BLACK CAP EDELZWICKER", description: "a delicious wine", country: "US", geo2: "geo2", type1: "white", type2: "still", size: "750mL", grape_blend: "concord", units: 17, price: 29.99},
    {name: "LAS LILAS VINHO VERDE", description: "a delicious wine", country: "PT", geo2: "geo2", type1: "white", type2: "still", size: "750mL", grape_blend: "concord", units: 10, price: 19.99},
    {name: "AUNTSFIELD CHARDONNAY", description: "a delicious wine", country: "NZ", geo2: "geo2", type1: "white", type2: "still", size: "750mL", grape_blend: "concord", units: 17, price: 29.99},
    {name: "AUNTSFIELD SAUVIGNON BLANC", description: "a delicious wine", country: "NZ", geo2: "geo2", type1: "white", type2: "still", size: "750mL", grape_blend: "concord", units: 13, price: 24.99},
    {name: "MOUNT RILEY SAUVIGNON BLANC", description: "a delicious wine", country: "NZ", geo2: "geo2", type1: "white", type2: "still", size: "750mL", grape_blend: "concord", units: 13, price: 22.99},
    {name: "ELLENA NASCHETTA", description: "a delicious wine", country: "IT", geo2: "geo2", type1: "white", type2: "still", size: "750mL", grape_blend: "concord", units: 11, price: 21.99},
    {name: "BELLA VITA PINOT GRIGIO", description: "a delicious wine", country: "IT", geo2: "geo2", type1: "white", type2: "still", size: "750mL", grape_blend: "concord", units: 9, price: 16.99},
    {name: "ALCESTI ISOLA BIANCO", description: "a delicious wine", country: "IT", geo2: "geo2", type1: "white", type2: "still", size: "750mL", grape_blend: "concord", units: 12, price: 19.99},
    {name: "ARIANNA OCCHIPINTI SP68 BIANCO", description: "a delicious wine", country: "IT", geo2: "geo2", type1: "white", type2: "still", size: "750mL", grape_blend: "concord", units: 28, price: 44.99},
    {name: "GADAIS MUSCADET", description: "a delicious wine", country: "FR", geo2: "geo2", type1: "white", type2: "still", size: "750mL", grape_blend: "concord", units: 12, price: 21.99},
    {name: "BORDEAUX BLANC MARY TAYLOR", description: "a delicious wine", country: "FR", geo2: "geo2", type1: "white", type2: "still", size: "750mL", grape_blend: "concord", units: 13, price: 22.99},
    {name: "SANCERRE LAUVERJAT", description: "a delicious wine", country: "FR", geo2: "geo2", type1: "white", type2: "still", size: "750mL", grape_blend: "concord", units: 21, price: 39.99},
    {name: "LAUVERJAT SANCERRE", description: "a delicious wine", country: "FR", geo2: "geo2", type1: "white", type2: "sparkling", size: "750mL", grape_blend: "concord", units: 13, price: 21.99},
    {name: "GULP HABLO VERDEJO", description: "a delicious wine", country: "ES", geo2: "geo2", type1: "white", type2: "sparkling", size: "750mL", grape_blend: "concord", units: 10, price: 19.99},
    {name: "ANTXIOLA TXAKOLINA", description: "a delicious wine", country: "ES", geo2: "geo2", type1: "white", type2: "sparkling", size: "750mL", grape_blend: "concord", units: 16, price: 29.99},
    {name: "SELBACH RIESLING INCLINE", description: "a delicious wine", country: "DE", geo2: "geo2", type1: "white", type2: "sparkling", size: "750mL", grape_blend: "concord", units: 12, price: 21.99},
    {name: "JAKOB SCHNEIDER RIESLING KABINETT", description: "a delicious wine", country: "DE", geo2: "geo2", type1: "white", type2: "sparkling", size: "750mL", grape_blend: "concord", units: 16, price: 28.99},
    {name: "PRISMA SAUVIGNON BLANC", description: "a delicious wine", country: "CL", geo2: "geo2", type1: "white", type2: "sparkling", size: "750mL", grape_blend: "concord", units: 13, price: 19.99},
    {name: "TORRE RRACINA NERO D'AVOLA", description: "a delicious wine", country: "IT", geo2: "geo2", type1: "red", type2: "sparkling", size: "750mL", grape_blend: "concord", units: 10, price: 19.99},
    {name: "MAGNUM BELLA VITA PINOT GRIGIO", description: "a delicious wine", country: "IT", geo2: "geo2", type1: "red", type2: "sparkling", size: "750mL", grape_blend: "concord", units: 16, price: 29.99},
    {name: "CHIARA CONDELLO SANGIOVESE", description: "a delicious wine", country: "IT", geo2: "geo2", type1: "red", type2: "sparkling", size: "750mL", grape_blend: "concord", units: 18, price: 29.99},
    {name: "PACE BARBERA D'ALBA", description: "a delicious wine", country: "IT", geo2: "geo2", type1: "red", type2: "sparkling", size: "750mL", grape_blend: "concord", units: 13, price: 21.99},
    {name: "LAMBUSCO QUARESIMO", description: "a delicious wine", country: "IT", geo2: "geo2", type1: "red", type2: "still", size: "750mL", grape_blend: "concord", units: 17, price: 29.99},
    {name: "DOMAINE DES MOIROTS BOURGOGNE PINOT", description: "a delicious wine", country: "FR", geo2: "geo2", type1: "red", type2: "still", size: "750mL", grape_blend: "concord", units: 20, price: 36.99},
    {name: "BEAUJOLAIS LES GRIOTTES PIERRE-MARI", description: "a delicious wine", country: "FR", geo2: "geo2", type1: "red", type2: "still", size: "750mL", grape_blend: "concord", units: 15, price: 26.99},
    {name: "CEDRUS MARCEL MALBEC", description: "a delicious wine", country: "FR", geo2: "geo2", type1: "red", type2: "still", size: "750mL", grape_blend: "concord", units: 13, price: 21.99},
    {name: "NICOLAS REAU ENLEVEMENT", description: "a delicious wine", country: "FR", geo2: "geo2", type1: "red", type2: "still", size: "750mL", grape_blend: "concord", units: 22, price: 39.99},
    {name: "CHATEAU LES GRAVIERES BORDEAUX SUPER", description: "a delicious wine", country: "FR", geo2: "geo2", type1: "red", type2: "still", size: "750mL", grape_blend: "concord", units: 12, price: 24.99},
    {name: "GAMA SUTRA OLIVIER LEMASSON", description: "a delicious wine", country: "FR", geo2: "geo2", type1: "red", type2: "still", size: "750mL", grape_blend: "concord", units: 24, price: 39.99},
    {name: "DOMAINE DU JAS COTES DU RHONE", description: "a delicious wine", country: "FR", geo2: "geo2", type1: "red", type2: "still", size: "750mL", grape_blend: "concord", units: 16, price: 29.99},
    {name: "BODEGAS SENORIO DE BARAHONDA CARRO", description: "a delicious wine", country: "ES", geo2: "geo2", type1: "red", type2: "still", size: "750mL", grape_blend: "concord", units: 12, price: 19.99},
    {name: "MURIEL RIOJA", description: "a delicious wine", country: "ES", geo2: "geo2", type1: "red", type2: "still", size: "750mL", grape_blend: "concord", units: 12, price: 21.99},
    {name: "CHONO CARMENERE", description: "a delicious wine", country: "CL", geo2: "geo2", type1: "red", type2: "still", size: "750mL", grape_blend: "concord", units: 11, price: 19.99},
    {name: "SMALL GULLY VYDS. SHIRAZ MR. BLACKS", description: "a delicious wine", country: "AU", geo2: "geo2", type1: "red", type2: "still", size: "750mL", grape_blend: "concord", units: 10, price: 21.99},
    {name: "ZWEIGELT VORSPANNHOF MAYR", description: "a delicious wine", country: "AT", geo2: "geo2", type1: "red", type2: "still", size: "750mL", grape_blend: "concord", units: 14, price: 24.99},
    {name: "RJ VINEDOS MALBEC MDZ", description: "a delicious wine", country: "AR", geo2: "geo2", type1: "red", type2: "still", size: "750mL", grape_blend: "concord", units: 11, price: 19.99},
    {name: "SEEDS & SKINS OLD WESTMINSTER", description: "a delicious wine", country: "US", geo2: "geo2", type1: "orange", type2: "still", size: "750mL", grape_blend: "concord", units: 8, price: 13.99},
    {name: "RAMATO PINOT GRIGIO MATTEO BRAIDOT", description: "a delicious wine", country: "IT", geo2: "geo2", type1: "orange", type2: "still", size: "750mL", grape_blend: "concord", units: 8, price: 17.99},
    {name: "LO-FI DRY VERMOUTH", description: "a delicious wine", country: "US", geo2: "geo2", type1: "fortified", type2: "still", size: "750mL", grape_blend: "concord", units: 19, price: 34.99},
    {name: "LAS LILAS VINHO VERDE ROSE", description: "a delicious wine", country: "PT", geo2: "geo2", type1: "rose", type2: "still", size: "750mL", grape_blend: "concord", units: 13, price: 19.99},
    {name: "DE ANGELIS ROSE MARCHE", description: "a delicious wine", country: "IT", geo2: "geo2", type1: "rose", type2: "still", size: "750mL", grape_blend: "concord", units: 13, price: 24.99},
    {name: "A VITA CALABRIA ROSATO", description: "a delicious wine", country: "IT", geo2: "geo2", type1: "rose", type2: "still", size: "750mL", grape_blend: "concord", units: 17, price: 29.99},
    {name: "LA BELLE ETOILE ROSE", description: "a delicious wine", country: "FR", geo2: "geo2", type1: "rose", type2: "still", size: "750mL", grape_blend: "concord", units: 11, price: 21.99}
]


db.Product
.remove({})
.then(() => db.Product.collection.insertMany(productSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});
