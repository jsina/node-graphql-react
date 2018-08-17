import { GraphQLObjectType, GraphQLString, GraphQLList } from "graphql";
import UserType from "./UserType";

import { companyUsers } from "../requests/requests";

const CompanyType = new GraphQLObjectType({
  name: "Company",
  fields: () => ({
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parentValue, args) {
        return companyUsers(parentValue.id)
          .then(resp => resp.data)
          .catch(err => err);
      }
    }
  })
});

export default CompanyType;
