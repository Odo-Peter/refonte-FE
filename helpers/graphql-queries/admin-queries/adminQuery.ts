import { gql } from '@apollo/client';

//Get all admins from the database
export const GET_ADMINS = gql`
  query GetAdmins {
    getAdmins {
      admins {
        _id
        name
        email
        contactNumber
        role
        createdAt
        updatedAt
      }
    }
  }
`;

//Perform a create admin operation
export const CREATE_ADMIN = gql`
  mutation RegisterAdmin(
    $name: String!
    $email: String!
    $password: String!
    $contactNumber: String
  ) {
    registerAdmin(
      name: $name
      email: $email
      password: $password
      contactNumber: $contactNumber
    ) {
      admin {
        _id
        name
        email
        contactNumber
        role
        createdAt
        updatedAt
      }
    }
  }
`;

//Perfom an admin delete operation
export const REMOVE_ADMIN = gql`
  mutation DeleteAdmin($deleteAdminId: String!) {
    deleteAdmin(id: $deleteAdminId) {
      response {
        message
      }
    }
  }
`;
