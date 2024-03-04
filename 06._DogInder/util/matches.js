import {fakerEN_IN} from "@faker-js/faker"


export default function getMatches(numberOfMatches=5){
    const matches = [];
    for (let i = 0; i<= numberOfMatches; i++){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response)=> response.json())
    .then((result)=> matches.push(result));
    }
    return matches
}

function getIndiaProfile(){
    return {
        name: fakerEN_IN.person.fullname(),
        bio: fakerEN_IN.person.bio(),
        adress:fakerEN_IN.person.streetAddress()
    }
}