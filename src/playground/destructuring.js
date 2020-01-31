/** OBJECT DESTRUCTURING */

const person = {
    // name: 'Israel',
    age: 29,
    location: {
        city: 'oruro',
        temp: 92
    }
};

// const name = person.name;
// const age = person.age;
const { name: myName = 'Yoo', age } = person;

console.log(`${ myName } is ${ age }.`);

const { city, temp: temperature } = person.location;

// if( person.location.city && person.location.temp ) {
if( city && temperature ) {
    console.log(`It's ${ city } in ${ temperature }.`);
}


///*************/

const book = {
    title: 'This is my title',
    author: 'Arderw Mitt',
    publisher: {
        name: 'Adms'
    }
}

const { name: publisherName = 'Self-Publisher' } = book.publisher;

console.log(publisherName);

/** ARRAY DESTRUCTURING */
const address = [
    '1233 Juniper Street',
    'Carnaas',
    'Loping',
    '1887',
];

const [ street, cityy, , zip ] = address;
const [ , , , , state = 'New York' ] = address;

// console.log(`You are in ${ address[1]} ${ address[2] }`);
console.log(`You are in ${ street } ${ state }`);


const item = [
    'Coffee (hot)',
    '$2.0',
    '$2.50',
    '$2.75'
];

const [ itemName = 'Item', , mediumPrice ] = item;
console.log(`A medium ${ itemName } costs ${ mediumPrice }`);

