const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } = graphql;

const UserType = new GraphQLObjectType({
	name: 'User',
	fields: {
		id: { type: GraphQLID },
		phoneNumber: { type: GraphQLString },
		score: { type: GraphQLInt },
	},
});

module.exports = UserType;
