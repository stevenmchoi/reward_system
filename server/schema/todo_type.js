const graphql = require('graphql');
const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLInt,
	GraphQLBoolean,
} = graphql;

const TodoType = new GraphQLObjectType({
	name: 'Todo',
	fields: {
		id: { type: GraphQLID },
		userId: { type: GraphQLInt },
		title: { type: GraphQLString },
		completed: { type: GraphQLBoolean },
	},
});

module.exports = TodoType;
