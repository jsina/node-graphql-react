import { GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql";

import { companyRequest } from '../requests/requests';
import CompanyType from './CompanyType';

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
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
  })
});

export default UserType;
