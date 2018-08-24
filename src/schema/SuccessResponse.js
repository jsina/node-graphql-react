import { GraphQLObjectType, GraphQLString } from "graphql";

const SuccessResponse = new GraphQLObjectType({
  name: "SuccessResponse",
  fields: {
    message: {
      type: GraphQLString
    }
  }
});

export default SuccessResponse;
