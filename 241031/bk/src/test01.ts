enum Role {
  // 숫자로 인식할 수 있는 타입이다. 룰을
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}
export const user1 = {
  name: "Daivid",
  role: "Admin",
  // id: Role.ADMIN,
};

export const user2 = {
  name: "Peter",
  role: "User",
  // id: Role.USER,
};

export const user3 = {
  name: "Roemo",
  role: "Guest",
  // id: Role.GUEST,
};
