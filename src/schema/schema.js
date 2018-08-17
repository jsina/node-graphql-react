import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList
} from "graphql";

import { userRequest, companyRequest } from '../requests/requests';
import UserType from './UserType';
import CompanyType from './CompanyType';

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
      args: { id: { type: GraphQLString }},
      resolve(parentValue, args) {
        return companyRequest(args.id)
          .then(resp => resp.data)
          .catch(err => err)
      }
    }
  }
});

export default new GraphQLSchema({
  query: RootQuery
});
