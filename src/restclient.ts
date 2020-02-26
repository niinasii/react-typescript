// aka PeopleService

import { Person } from './person';
const axios = require('axios');

const apiUrl = "http://localhost:3000/api/people";

function getPeople(callback:
    (people: Person[]) => void) {
    console.log("getPeople");
    axios.get(apiUrl)
        .then(function (list) { callback(list.data); });
}

function createPerson(newPerson: Person,
    callback: (status: number) => void) {
    axios.post(apiUrl, newPerson)
        .then(function (response) {
            console.dir(response);
            callback(response.status);
        });
}

function deletePerson(id: number) {
    return axios.delete(apiUrl + "/" + id)
        .then(res => {
            console.log("Deleted");
            console.dir(res);
        });
}

export default {getPeople, createPerson, deletePerson};