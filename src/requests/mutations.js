import axios from 'axios';

export function addUser({firstname, age, companyId}) {
    return axios.post('http://localhost:4000/users', {
        firstname,
        age,
        companyId,
    })
}

export function addUsers(users) {
    const promises = users.map(({firstname, age, companyId}) =>
        axios.post('http://localhost:4000/users', {
            firstname,
            age,
            companyId
        })
    );
    return Promise.all(promises)
}
