const User = require('../models/User');

const resolvers = {
	Query: {
		users: async () => {
			return await User.find({});
		},
	},
	Mutation: {
		createUser: async (_, { firstName, lastName, email }) => {
			const user = new User({ firstName, lastName, email });
			await user.save();
			return user;
		},
	},
};

module.exports = resolvers;
