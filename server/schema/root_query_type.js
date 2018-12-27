const graphql = require('graphql');
const axios = require('axios');
const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLID,
} = graphql;

const UserType = require('./user_type');

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		// fields: () => ({ for circular references
		users: {
			type: new GraphQLList(UserType),
			resolve() {
				return axios.get('http://localhost:3000/users').then((res) => res.data);
			},
		},
		user: {
			// for getUser and getPoints
			type: UserType,
			args: { id: { type: new GraphQLNonNull(GraphQLID) } },
			resolve(parentValue, { id }) {
				return axios
					.get(`http://localhost:3000/users/${id}`)
					.then((res) => res.data);
			},
		},
	},
});

module.exports = RootQuery;
