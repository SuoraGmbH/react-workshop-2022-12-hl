interface User {
    firstName: string;
    lastName: string;
}


const something = ["a", "b", "c"];
const something2 = {a: "a", "b":"b", "c": "c"};

formatName({
    firstName: "bla",
    lastName: "blub"
})

function formatName(user: User) {
    return `${user.firstName} ${user.lastName}`;
}

const user: User = {
    firstName: 'Miriam',
    lastName: 'Janssen',
};

const element = <h1>👋, {formatName(user)}!</h1>;
