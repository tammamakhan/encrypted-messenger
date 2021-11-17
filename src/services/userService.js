const users = [
  {
    username: "tammamkhan",
    password: "12345",
  },
  {
    username: "user1",
    password: "12345",
  },
  {
    username: "user2",
    password: "12345",
  },
];

export function getUsers() {
  return users;
}

const userServiceObject = {
  getUsers,
};

export default userServiceObject;
