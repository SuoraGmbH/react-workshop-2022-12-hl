export const bla = "";

interface BaseUser {
  id: string;
}

interface User extends BaseUser {
  firstName: string;
}

interface User {
  lastName: string;
}

const user: User = {
  id: "asdf",
  firstName: "asdf",
  lastName: "asdf",
};
