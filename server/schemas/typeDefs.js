const typeDefs = `
    type User {
        _id: ID
        firstName: String!
        lastName: String!
        email: String!
    }

    type Query {
        users: [User]
    }

    type Mutation {
        createUser(firstName: String!, lastName: String!, email: String!): User
    }
`;

module.exports = typeDefs;
