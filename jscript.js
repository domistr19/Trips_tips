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



let photosVisited = [];

photosVisited.push(bouzov,houska,helfstyn,pernstejn,bezdez);

let photosPlan = [];

photosPlan.push(buchlov,kost,loket,rabi,svihov,vranov);

let currentPhoto = 0;
let currentTitle = 0;
let currentDesc = 0;
let maxphotoVisited = photosVisited.length;
let maxphotoPlan = photosPlan.length;

$('#photovis').attr('src', photosVisited[currentPhoto].photo);
$('#pictitlevis').text(photosVisited[currentPhoto].title);
$('#descvis').text(photosVisited[currentPhoto].desc);

$('#photoplan').attr('src', photosPlan[currentPhoto].photo);
$('#pictitleplan').text(photosPlan[currentPhoto].title);
$('#descplan').text(photosPlan[currentPhoto].desc);


$('#rightvis').click(()=> {

    if (currentPhoto >=0 && currentPhoto < photosVisited.length) {
        $('#photovis').attr('src', photosVisited[currentPhoto++].photo);}
    else {$('#photovis').attr('src', photosVisited[0].photo);};
    if (currentTitle >=0 && currentTitle < photosVisited.length) {
        $('#pictitlevis').text(photosVisited[currentTitle++].title);}
    else {$('#pictitlevis').text(photosVisited[0].title);};
    if (currentDesc >=0 && currentDesc < photosVisited.length){
        $('#descvis').text(photosVisited[currentDesc++].desc);}
    else {$('#descvis').text(photosVisited[0].desc);};
    }
);


$('#leftvis').click(()=> {

    if (currentPhoto >0 && currentPhoto <= photosVisited.length) {
        $('#photovis').attr('src', photosVisited[currentPhoto--].photo);}
    else {$('#photovis').attr('src', photosVisited[4].photo);};
    if (currentTitle >0 && currentTitle <= photosVisited.length) {
        $('#pictitlevis').text(photosVisited[currentTitle--].title);}
    else {$('#pictitlevis').text(photosVisited[4].title);};
    if (currentDesc >0 && currentDesc <= photosVisited.length) {
        $('#descvis').text(photosVisited[currentDesc--].desc);}
    else {$('#descvis').text(photosVisited[4].desc);};
    }
);


$('#rightplan').click(()=> {

    if (currentPhoto >=0 && currentPhoto <photosPlan.length) {
        $('#photoplan').attr('src', photosPlan[currentPhoto++].photo);}
    else {$('#photoplan').attr('src', photosPlan[0].photo);};
    if (currentTitle >=0 && currentTitle <photosPlan.length) {
        $('#pictitleplan').text(photosPlan[currentTitle++].title);}
    else {$('#pictitleplan').text(photosPlan[0].title);};
    if (currentDesc >=0 && currentDesc <photosPlan.length){
        $('#descplan').text(photosPlan[currentDesc++].desc);}
    else {$('#descplan').text(photosPlan[0].desc);};
    }
);


$('#leftplan').click(()=> {

    if (currentPhoto >0 && currentPhoto <= photosPlan.length) {
        $('#photoplan').attr('src', photosPlan[currentPhoto--].photo);}
    else {$('#photoplan').attr('src', photosPlan[maxphotoPlan].photo);};
    if (currentTitle >0 && currentTitle <= photosPlan.length) {
        $('#pictitleplan').text(photosPlan[currentTitle--].title);}
    else {$('#pictitleplan').text(photosPlan[maxphotoPlan].title);};
    if (currentDesc >0 && currentDesc <= photosPlan.length) {
        $('#descplan').text(photosPlan[currentDesc--].desc);}
    else {$('#descplan').text(photosPlan[maxphotoPlan].desc);};
    }
);
    
photosVisited.forEach((photosVisited) => {
    $('.thumbcontainer1').append (`<div class = thumbnails data-index=${index}><img src="${photosVisited.photo}"></div>`);
    $('.thumbnails div').click(()=> {$('#photoplan').attr('src', photosVisited[index].photo); });
});

photosPlan.forEach((photosPlan) => {
    $('.thumbcontainer2').append (`<div class = thumbnails><img src="${photosPlan.photo}"></div>`)    
});
