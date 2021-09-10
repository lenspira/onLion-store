import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@onlion.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Roberts",
    email: "jroberts@onlion.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Amy Smith",
    email: "asmith@onlion.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
