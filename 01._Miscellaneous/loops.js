//loop method
// forEach, map, find, reduce, filter

const dogs = [
    {name: "lassie", famelevel: 13},
    {name: "beethoven", famelevel : 8},
    {name: "hachiko", famelevel: 18},
    {name: "balto", famelevel: 5}
];

// add a famelevel of +3 for all dogs


const increasedFame = dogs.map((dog) =>{
    dog.famelevel +=3;
return dog
})

const genderedDogs = dogs.map(dog => ({
    isMale: dog.name !== "lassie",
    ...dog
}));
console.log(genderedDogs);

const numbers = [1,2,3,4,5];

const doubleNumbers = numbers.map((number)=> number*2);
console.log(numbers);
console.log(doubleNumbers);

const numberObjects = {}