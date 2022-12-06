export const signUp1 = (userName: string, password: string) => {
  console.log(userName, password);
};

interface SignUp2Parameters {
  userName: string;
  password: string;
  something: () => void;
}

const signUp2 = (parameters: SignUp2Parameters) => {
  console.log(parameters.userName, parameters.password);
};

signUp1("maksim@hlag.de", "secretpasswordnoooneknows");

signUp2({
  userName: "maksim",
  password: "asdinodiajso",
  something: () => {},
});
