const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const RootQuery = require('./root_query_type');

module.exports = new GraphQLSchema({
	query: RootQuery,
});
