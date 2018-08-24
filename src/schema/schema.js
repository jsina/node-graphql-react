import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInputObjectType
} from "graphql";

import { userRequest, companyRequest } from "../requests/queries";
import { addUser, addUsers } from "../requests/mutations";
import UserType from "./UserType";
import CompanyType from "./CompanyType";

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
      resolve(parentValue, args) {
        return userRequest(args.id)
          .then(resp => resp.data)
          .catch(err => err);
      }
    },
    company: {
      type: CompanyType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return companyRequest(args.id)
          .then(resp => resp.data)
          .catch(err => err);
      }
    }
  }
});

const RootMutation = new GraphQLObjectType({
  name: "RootMutation",
  fields:() => ({
    addUser: {
      type: UserType,
      args: {
        user: {type: userInputType}
      },
      resolve(parentValue, args) {
        return addUser(args)
          .then(res => res.data)
          .catch(err => err);
      }
    },
    addUsers: {
      type: GraphQLList(UserType),
      args: {
        users: {
          type: new GraphQLList(userInputType)
        }
      },
      resolve(parentValue, args) {
        return addUsers(args.users)
          .then(res => {
            return res.map(result => result.data)
          })
          .catch(err => err);
      }
    }
  })
});

const userInputType = new GraphQLInputObjectType({
  name: "userInput",
  fields: {
    firstname: { type: GraphQLNonNull(GraphQLString) },
    age: { type: GraphQLNonNull(GraphQLInt) },
    companyId: { type: GraphQLString }
  }
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});
