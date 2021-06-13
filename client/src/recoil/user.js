import { atom, selector } from "recoil";

export const userState = atom(
  {
    key: "userState",
    default: {
      userstate: null,
      admin: false,
    }
  }
);

export const loggedIn = selector({
  key: "loggedIn",
  get: ({ get }) => {

    const user = get(userState);

    return user.email ? true : false;
  },
});

export const Admin = selector({
  key: "isAdmin",
  get: ({ get }) => {
    const user = get(userState);
    if (user.admin) {
      return user.admin;
    }
    return false;
  },
});
