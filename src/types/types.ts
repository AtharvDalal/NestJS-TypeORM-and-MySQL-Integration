export type CreateUserParams = {
  username: string;
  password: string;
};
export type UpdateUserParams = {
  username: string;
  password: string;
};

export type CreateProfileParams = {
  name: string;
  surname: string;
  email: string;
  age: number;
  address: string;
};

export type userpostParams = {
  title: string;

  desc: string;
};
