// const graphql = require('graphql');
import {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLInt,
} from 'graphql';

const UserType = new GraphQLObjectType({
	name: 'User',
	fields: {
		id: { type: GraphQLID },
		phoneNumber: { type: GraphQLString },
		score: { type: GraphQLInt },
	},
});
