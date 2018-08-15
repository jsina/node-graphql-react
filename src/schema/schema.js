import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList
} from "graphql";
import axios from "axios";

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    firstname: { type: GraphQLString },
    age: { type: GraphQLInt },
    // companies: { type: GraphQLList(CompanyType) }
  }
});

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
        return request(args.id)
          .then(resp => resp.data)
          .catch(err => err);
      }
    }
  }
});

function request(id) {
  return axios.get(`http://localhost:4000/users/${id}`);
}

export default new GraphQLSchema({
  query: RootQuery
});
