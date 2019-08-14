// Characters

const mrGreen={
    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur",
};

const drOrchid={
    first_name:   "Doctor",
    last_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation:    "Scientist"
};

const profPlum={
    first_name:   "Victor",
    last_name:    "Plum",
    color:        "purple",
    description:  "Billionare video game designer",
    age:          22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   "Designer",
};




const missScarlet ={
    first_name:   "Kasandra",
    last_name:    "Scarlet",
    color:        "red",
    description:  "She is an A-list movie star with a dark past",
    age:          31,
    image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation:   "Actor",
};


const mrsPeacock={
    first_name:   "Eleanor",
    last_name:    "Peacock",
    color:        "blue",
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    age:          36,
    image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Socialité",
};

const mrMustard={
    first_name:   "Jack",
    last_name:    "Mustard",   
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:          62,
    image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:   "Retired Football player",
};
// Weapons

const rope ={
    name: "rope",
    weight: 10,
};

const knife ={
    name: "knife",
    weight: 8,
};

const candlestick ={
    name: "candlestick",
    weight: 2,
};

const dumbbell ={
    name: "dumbbell",
    weight: 30,
};

const poison ={
    name: "poison",
    weight: 2,
};

const axe ={
    name: "axe",
    weight: 15,
};

const bat ={
    name: "bat",
    weight: 13,
};

const trophy= {
    name: "trophy",
    weight: 25,
};
const pistol ={
    name: "pistol",
    weight: 20,
};


// Rooms

const Rooms={
    name1: "Dining Room",
    name2: "Conservatory",
    name3: "Kitchen",
    name4: "Study",
    name5: "Library",
    name6: "Billiard Room",
    name7: "Lounge",
    name8: "Ballroom",
    name9: "Hall",
    name10: "Spa",
    name11: "Living Room",
    name12: "Observatory",
    name13: "Theater",
    name14: "Guest House",
    name15: "Patio",
};

// Characters Collection
var charactersArray = [mrGreen,drOrchid,profPlum,missScarlet,mrsPeacock,mrMustard];
console.log(charactersArray);


// Rooms' Collection
var roomsArray = Object.values(Rooms);
console.log(roomsArray);

// Weapons Collection
var weaponsArray = [rope,knife,candlestick,dumbbell,poison,axe,bat,trophy,pistol];
console.log(weaponsArray);

function randomSelector(array) {
    return array[Math.floor(Math.random()*array.length)];
    
}
 console.log(randomSelector(weaponsArray));


 function pickMistery(){
    let misteryEnvelope={
        suspect: randomSelector(charactersArray),
        weapon: randomSelector(weaponsArray),
        room: randomSelector(roomsArray)};
        return misteryEnvelope;
 }
 
 let misteryEnvelope=pickMistery();
 console.log(misteryEnvelope);


function revealMistery (misteryEnvelope){
    return misteryEnvelope.suspect.first_name + " "+ misteryEnvelope.suspect.last_name + " "+"killed Mr. Boddy using the" + " "+misteryEnvelope.weapon.name + " "+ "in the" +" "+ misteryEnvelope.room + " "+"!!!!";

     
}
console.log (revealMistery (misteryEnvelope));

/* Another way of printing
function revealMistery(mystery){
    return `${mystery.suspect.first_name} ${mystery.suspect.last_name} killed Mr. Boddy using the ${mystery.weapon.name} in the ${mystery.room.name}!!!`;
    }
    console.log(revealMistery(mysteryEnvelope));
*/