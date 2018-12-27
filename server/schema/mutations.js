const graphql = require('graphql');
const axios = require('axios');
const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLNonNull,
	GraphQLInt,
} = graphql;

const UserType = require('./user_type');

const mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addUser: {
			type: UserType,
			args: {
				phoneNumber: { type: new GraphQLNonNull(GraphQLString) },
				score: { type: GraphQLInt },
			},
			resolve(parentValue, { phoneNumber, score }) {
				score = score || 0;

				return axios
					.post('http://localhost:3000/users', { phoneNumber, score })
					.then((res) => res.data);
			},
		},
		addPoints: {
			type: UserType,
			args: {
				id: { type: new GraphQLNonNull(GraphQLID) },
				score: { type: new GraphQLNonNull(GraphQLInt) },
			},
			resolve(parentValue, args) {
				return axios
					.patch(`http://localhost:3000/users/${args.id}`, args)
					.then((res) => res.data);
			},
		},
	},
});

module.exports = mutation;
