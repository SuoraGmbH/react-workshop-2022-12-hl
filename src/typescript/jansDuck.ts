export interface User {
  firstName: string;
  lastName: string;
}

const jansDuck = (user: User) => {};

let user1 = {
  firstName: "foo",
  lastName: "bar",
  id: 23,
};
jansDuck(user1);

jansDuck({
  firstName: " asdf",
  lastName: "adsiodas",
  // id: "asd", // doesn't work
});
