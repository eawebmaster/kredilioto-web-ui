export default {
  login: "/uyelik",
  register: "/uye-ol",
  myAccount: "/auth/my-account",
  home: "/",
  category: (name: string) => `/category/${name}`,
  detail: (name: string) => `/detail/${name}`,
};
