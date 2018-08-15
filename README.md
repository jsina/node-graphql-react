# NODEJS_GRAPHQL_JSON_DB

this README file is just for the add-company-schema branch

## Technology I've used

node.js
graphql

---

## Running
install packages:
`npm install`
for running db.json file run the commond:
`npm run json-server`
and for running server:
`npm run start`

after running server you could access the `graphiQL` dashboard for writing query to the server on `http://localhost:3000/graphql`

## Sample query with graphql
`
{
  user(id: "3") {
    id
    firstname
    age
    company {
      id
      name
      description
    }
  }
}
`
