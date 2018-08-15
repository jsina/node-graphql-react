import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList
} from "graphql";
import axios from "axios";

const CompanyType = new GraphQLObjectType({
  name: "Company",
  fields: {
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    }
  }
});

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    firstname: { type: GraphQLString },
    age: { type: GraphQLInt },
    company: {
      type: CompanyType,
      resolve(parentValue, args) {
        return companyRequest(parentValue.companyId)
          .then(resp => resp.data)
          .catch(err => err);
      }
    }
  }
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    user: {
      type: UserType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve(value, args) {
        return userRequest(args.id)
          .then(resp => resp.data)
          .catch(err => err);
      }
    }
  }
});

function userRequest(id) {
  return axios.get(`http://localhost:4000/users/${id}`);
}

function companyRequest(id) {
  return axios.get(`http://localhost:4000/companies/${id}`);
}

export default new GraphQLSchema({
  query: RootQuery
});
