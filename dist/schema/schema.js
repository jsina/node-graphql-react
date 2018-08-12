"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require("graphql");

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var users = [{
  id: "1",
  firstname: "sina maleki",
  age: 27
}, {
  id: "2",
  firstname: "saeed maleki",
  age: 33
}];

var UserType = new _graphql.GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: _graphql.GraphQLString },
    firstname: { type: _graphql.GraphQLString },
    age: { type: _graphql.GraphQLInt }
  }
});

var RootQuery = new _graphql.GraphQLObjectType({
  name: "RootQuery",
  fields: {
    user: {
      type: UserType,
      args: {
        id: {
          type: _graphql.GraphQLString
        }
      },
      resolve: function resolve(value, args) {
        return _lodash2.default.find(users, { id: args.id });
      }
    }
  }
});

exports.default = new _graphql.GraphQLSchema({
  query: RootQuery
});