export const userPropertiesSwagger = {
  id: {
    name: 'id',
    description: 'The id must be included in the URI',
    example: 'a196d03c-1098-4f3b-8e9a-f0765aeacc74',
    required: true,
    type: String,
  },
  name: {
    name: 'name',
    description: 'users name',
    required: true,
    type: String,
  },
  email: {
    name: 'email',
    description: 'users email',
    required: true,
    type: String,
  },
  password: {
    name: 'password',
    description: 'users password',
    required: true,
    type: String,
  },
};
