import axios from "axios";

export function addUser({ firstname, age, companyId }) {
  return axios.post("http://localhost:4000/users", {
    firstname,
    age,
    companyId
  });
}

export function addUsers(users) {
  const promises = users.map(({ firstname, age, companyId }) =>
    axios.post("http://localhost:4000/users", {
      firstname,
      age,
      companyId
    })
  );
  return Promise.all(promises);
}

export function deleteUser(userId) {
  return axios.delete(`http://localhost:4000/users/${userId}`);
}

export function updateUser(id, user) {
  return axios.patch(`http://localhost:4000/users/${id}`, user);
}
