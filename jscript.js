bouzov ={ photo:'image/bouzov.jpg',title: 'Hrad Bouzov', desc:'One of the most beautiful castles in North Moravia'};
buchlov ={ photo:'image/buchlov.jpg',title: 'Hrad Buchlov', desc:'One of the oldest castles in the Czech republic'};
houska ={ photo:'image/houska.jpg',title: 'Hrad Houska', desc:'The legend says, that  there is a gate to hell under this castle'};
helfstyn ={ photo:'image/hrad-helfstyn.jpg',title: 'Hrad Helfštýn', desc:'Castle of the fire and blacksmiths'};
kost ={ photo:'image/kost.jpg',title: 'Hrad Kost', desc:'Beautiful ancient castle in Central Bohemia'};
loket ={ photo:'image/loket.jpg',title: 'Hrad Loket', desc:'Medieval castle in North West Bohemia upon the river Ohře'};
pernstejn ={ photo:'image/pernstejn.jpg',title: 'Hrad Pernštejn', desc:'One of the most original gothic castles in central Europe'};
rabi ={ photo:'image/rabi.jpg',title: 'Hrad Rábí', desc:'The largest castle ruins in the country'};
svihov ={ photo:'image/svihov.jpg',title: 'Vodní hrad Švihov', desc:'Unique water castle complex in the Sounth Bohemia, place of anual music festivals'};
vranov ={ photo:'image/vranov.jpg',title: 'Hrad Vranov', desc:'South Moravian Chateau-Castle near the Austrian border'};
bezdez = { photo:'image/bezdez.jpg',title: 'Hrad Bezděz', desc:'Very popular and famous castle ruins in Central Bohemia'};



let photos = [];

photos.push(bouzov,buchlov,houska,helfstyn,kost,loket,pernstejn,rabi,svihov,vranov,bezdez);

let currentPhoto = 0;
let currentTitle = 0;
let currentDesc = 0;

$('#photo').attr('src', photos[currentPhoto].photo);
$('#pictitle').text(photos[currentPhoto].title);
$('#desc').text(photos[currentPhoto].desc);



$('.rightbanner').click(()=> {

    if (currentPhoto >=0 && currentPhoto <10) {
        $('#photo').attr('src', photos[currentPhoto++].photo);}
    else {$('#photo').attr('src', photos[currentPhoto].photo);};
    if (currentTitle >=0 && currentTitle <10) {
        $('#pictitle').text(photos[currentTitle++].title);}
    else {$('#pictitle').text(photos[currentTitle].title);};
    if (currentDesc >=0 && currentDesc <10){
        $('#desc').text(photos[currentDesc++].desc);}
    else {$('#desc').text(photos[currentDesc].desc);};
    }
);


$('.leftbanner').click(()=> {

    if (currentPhoto >0 && currentPhoto <= 10) {
        $('#photo').attr('src', photos[currentPhoto--].photo);}
    else {$('#photo').attr('src', photos[currentPhoto].photo);};
    if (currentTitle >0 && currentTitle <= 10) {
        $('#pictitle').text(photos[currentTitle--].title);}
    else {$('#pictitle').text(photos[currentTitle].title);};
    if (currentDesc >0 && currentDesc <= 10) {
        $('#desc').text(photos[currentDesc--].desc);}
    else {$('#desc').text(photos[currentDesc].desc);};
    }
);
    


