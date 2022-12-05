export const bla = "";

type BaseUser = {
  id: string;
};

type User = {
  firstName: string;
};

const example = (user: UserUnionType) => {};

// UserIntersectionType contains all types from User AND BaseUser
type UserIntersectionType = User & BaseUser;

// UserUnionType needs to fulfil EITHER User OR BaseUser
type UserUnionType = User | BaseUser;
const userA: UserIntersectionType = {
  firstName: "hallo",
  id: "231",
};

// is valid, because userA fulfils BaseUser, because it has an d
example(userA);
const userB: UserUnionType = {
  id: "231",
};
const userC: UserUnionType = {
  firstName: "231",
};

const userD: UserUnionType = {
  firstName: "231",
  id: "siodsa",
};
