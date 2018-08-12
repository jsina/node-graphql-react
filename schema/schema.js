import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} from "graphql";
import _ from "lodash";

const users = [
  {
    id: "1",
    firstname: "sina maleki",
    age: 27
  },
  {
    id: "2",
    firstname: "saeed maleki",
    age: 33
  }
];

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    firstname: { type: GraphQLString },
    age: { type: GraphQLInt }
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
        return _.find(users, { id: args.id });
      }
    }
  }
});

export default new GraphQLSchema({
  query: RootQuery
});
