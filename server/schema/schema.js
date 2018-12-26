import _ from 'lodash';
// const graphql = require('graphql');
import {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLInt,
	GraphQLSchema,
} from 'graphql';

const users = [
	{ id: '1', phoneNumber: '5555555555', score: 0 },
	{ id: '2', phoneNumber: '4445556666', score: 0 },
];

const UserType = new GraphQLObjectType({
	name: 'User',
	fields: {
		// id: { type: GraphQLID },
		id: { type: GraphQLString },
		phoneNumber: { type: GraphQLString },
		score: { type: GraphQLInt },
	},
});

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		user: {
			type: UserType,
			// args: { id: { type: GraphQLID } },
			args: { id: { type: GraphQLString } },
			resolve(parentValue, args) {
				return _.find(users, { id: args.id });
			},
		},
	},
});

export default new GraphQLSchema({
	query: RootQuery,
});
