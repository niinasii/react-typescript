// aka PeopleService
import { Person } from './person';
import axios from 'axios';

const apiUrl = "http://localhost:5500/api/people";

export function getPeople(callback:(people: Person[]) => void) {
    axios.get(apiUrl).then(function (res) {
        // console.dir(res.data);
        callback(res.data);
    })
}

export function luoPerson(newPerson: Person, callback: (status: number) => void) {
    axios.post(apiUrl, newPerson)
        .then(function (response) {
            console.dir(response);
            callback(response.status);
        });
}

export function deletePerson(id: string):Promise <{}> {
    return axios.delete(apiUrl+id).then(res => {
            console.log("Deleted");
            console.dir(res);
            return res;
        });
}