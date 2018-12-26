const graphql = require('graphql');
const axios = require('axios');
const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLInt,
	GraphQLSchema,
} = graphql;
const _ = require('lodash');

// const users = [
// 	{ id: '1', phoneNumber: '5555555555', score: 0 },
// 	{ id: '2', phoneNumber: '4445556666', score: 0 },
// ];

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
			resolve(parentValue, { id }) {
				return axios
					.get(`http://localhost:3000/users/${id}`)
					.then((res) => res.data);
			},
		},
	},
});

module.exports = new GraphQLSchema({
	query: RootQuery,
});
