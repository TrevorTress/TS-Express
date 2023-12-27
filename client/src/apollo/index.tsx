import { gql } from '@apollo/client';

// Define your query
export const GET_USERS = gql`
	query Query {
		users {
			firstName
			lastName
			email
		}
	}
`;

// Define your mutation
export const CREATE_USER = gql`
	mutation Mutation($firstName: String!, $lastName: String!, $email: String!) {
		createUser(firstName: $firstName, lastName: $lastName, email: $email) {
			firstName
			lastName
			email
		}
	}
`;
