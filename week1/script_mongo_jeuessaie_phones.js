/* Insertion  d'un jeu de données de nbDocument documents dans collection phones */

var nbDocument = 10000;
print("Nombre de phones rajouté : " + nbDocument);

products = ["Iphone5", "Iphone4S", "GalaxyS2", "HTC Desire", "Nexus4", "Xperia10", "Galaxy Tab 2", "Asus X3", "Nokia Lumia8", "BlackBerry 10", "GalaxyS3"]
taille_ecran = [ 3, 3.7, 4, 4.7, 5.2, 10.1, 9, 7 ]
type = ["Tablet", "Smartphone"]
os = ["Android", "Windows Mobile"]
colors = ["black","pink","white","brown","grey"]
ramSize = ["512MB","1024MB","2048MB"]
hddSize = ["2GB","8GB","16GB","32GB"]
releaseYears = [2008,2009,2010,2011,2012]
devises = ["€","$"]

function getRandProduct() { return products[Math.floor((Math.random()*100)%products.length)] }

function getCode() { return Math.random().toString(36).substring(7) }

function getScreen() { return taille_ecran[Math.floor((Math.random()*100)%taille_ecran.length)] }

function colorSort() { return 0.5-Math.random() }
function getColors() { var nbColors=Math.floor((Math.random()*100)%colors.length)+1; return colors.sort(colorSort).slice(0,nbColors); }

function getOs(name) { var newName= new String(name); return (newName.search(/iphone/i) != -1 ? "iOS" : os[Math.floor((Math.random()*100)%os.length)]) }

function getType(screenSize){ return (screenSize >=7) ? type[0] : type[1] }
function hdRandom() { return ((0.5-Math.random()>0) ? true : false) }
function getRam() { return ramSize[Math.floor((Math.random()*100)%ramSize.length)] }
function getHdd() { return hddSize[Math.floor((Math.random()*100)%hddSize.length)] }
function getRelease() { return releaseYears[Math.floor((Math.random()*100)%releaseYears.length)] }
function getDate() { return '01-01-' + releaseYears[Math.floor((Math.random()*100)%releaseYears.length)] }

function getPrice() { return Math.round((Math.random()*1000),2) }
function getDevise() { return devises[Math.floor((Math.random()*100)%devises.length)] }

/* Boubcle principale  après RAZ de la collection phones */

db.phones.drop()
for ( var i=0; i<nbDocument ;i++) { var sc = getScreen(); db.phones.insert({phoneName : getRandProduct(), code : getCode(), os : getOs(this.phoneName), release: new Date(getDate()), specs : { screen : sc,colors : getColors(),  type : getType(sc), resolutionHD: hdRandom(), hdd : getHdd(), ram: getRam(), misc : {countSell : null, price : getPrice(), devise : getDevise() } } });}

