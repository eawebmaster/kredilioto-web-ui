export default {
  login: "/uyelik",
  register: "/uye-ol",
  myAccount: "/hesabim/bilgilerim",
  home: "/",
  category: (name: string) => `/category/${name}`,
  detail: (name: string) => `/detail/${name}`,
};
